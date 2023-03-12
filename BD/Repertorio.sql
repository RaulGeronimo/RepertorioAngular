CREATE DATABASE Repertorio;

USE Repertorio;

CREATE TABLE Pais(
    idPais INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Nacionalidad VARCHAR(70),
    Continente VARCHAR(50),
    Bandera TEXT
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE Instrumento(
    idInstrumento INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(70),
    Descripcion TEXT,
    Foto TEXT
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE Artista(
    idArtista INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(70),
    NombreArtistico VARCHAR(50),
    Genero CHAR,
    FechaNacimiento DATE,
    FechaFinado VARCHAR(50), /* DATE */
    Estatura DOUBLE,
    idNacionalidad INT,
    Instrumentos VARCHAR(100),
    TipoVoz VARCHAR(50),
    Foto TEXT,
    FOREIGN KEY (idNacionalidad) REFERENCES Pais(idPais) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE Grupo(
    idGrupo INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Origen VARCHAR(200),
    Genero VARCHAR(200),
    Inicio DATE,
    Fin VARCHAR(50), /* DATE */
    Sellos VARCHAR(150),
    Estado VARCHAR(50),
    SitioWeb VARCHAR(50),
    Idioma VARCHAR(50),
    Logo TEXT
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE Artista_Grupo(
    Codigo INT PRIMARY KEY AUTO_INCREMENT,
    idArtista INT,
    idGrupo INT,
    FechaInicio DATE,
    FechaFin VARCHAR(50), /* DATE */
    idInstrumento INT,
    FOREIGN KEY (idArtista) REFERENCES Artista(idArtista) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (idGrupo) REFERENCES Grupo(idGrupo) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (idInstrumento) REFERENCES Instrumento(idInstrumento) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE Disquera(
    idDisquera INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(60),
    Fundacion DATE,
    Fundador VARCHAR(100),
    Generos VARCHAR(100),
    idPais INT,
    Logo TEXT,
    FOREIGN KEY (idPais) REFERENCES Pais(idPais) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE Album(
    idAlbum INT PRIMARY KEY AUTO_INCREMENT,
    idGrupo INT,
    idDisquera INT,
    Nombre VARCHAR(60),
    Duracion TIME,
    Lanzamiento DATE,
    Grabacion VARCHAR(200),
    Genero VARCHAR(100),
    Portada TEXT,
    FOREIGN KEY (idGrupo) REFERENCES Grupo(idGrupo) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (idDisquera) REFERENCES Disquera(idDisquera) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE Canciones(
    idCancion INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(70),
    Duracion TIME,
    Publicacion DATE,
    Genero VARCHAR(100),
    Idioma VARCHAR(50),
    Interpretacion VARCHAR(50), /* cover, original, remake */
    idGrupo INT,
    FOREIGN KEY (idGrupo) REFERENCES Grupo(idGrupo) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

CREATE TABLE Canciones_Album(
    Codigo INT PRIMARY KEY AUTO_INCREMENT,
    idAlbum INT,
    idCancion INT,
    Numero INT,
    FOREIGN KEY (idAlbum) REFERENCES Album(idAlbum) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (idCancion) REFERENCES Canciones(idCancion) ON UPDATE CASCADE ON DELETE CASCADE
)
ENGINE = InnoDB DEFAULT CHARACTER SET = utf8;

/* --------------------------------------------------------------------------------------- VISTAS --------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------- ARTISTA --------------------------------------------------------------------- */
CREATE OR REPLACE VIEW
Vista_Artista AS
SELECT
Artista.idArtista,
Artista.Nombre,
Artista.NombreArtistico,
IF (Artista.Genero = 'H', 'Hombre', 'Mujer') AS Genero,
DATE_FORMAT(Artista.FechaNacimiento, "%d / %M / %Y") AS FechaNacimiento,
DATE_FORMAT(Artista.FechaFinado, "%d / %M / %Y") AS FechaFinado,
CASE
WHEN Artista.FechaFinado IS NULL OR Artista.FechaFinado <= 0 THEN CONCAT_WS(' ', TIMESTAMPDIFF(YEAR, Artista.FechaNacimiento, NOW()), 'años')
WHEN Artista.FechaFinado <= 0 THEN 'Fecha Invalida'
WHEN Artista.FechaNacimiento <= Artista.FechaFinado THEN CONCAT_WS(' ', TIMESTAMPDIFF(YEAR, Artista.FechaNacimiento, Artista.FechaFinado), 'años')
ELSE 'Fecha Invalida'
END AS Edad,
FORMAT(Artista.Estatura, 2) AS Estatura,
CONCAT_WS(' - ', Pais.Nombre, Pais.Nacionalidad) AS Pais,
Artista.Instrumentos,
Artista.TipoVoz,
Artista.Foto
FROM Artista
INNER JOIN Pais
ON Artista.idNacionalidad = Pais.idPais
ORDER BY Nombre;

/* ---------------------------------------------------------------------- GRUPO ---------------------------------------------------------------------- */
CREATE OR REPLACE VIEW
Vista_Grupo AS
SELECT 
G.idGrupo,
G.Nombre,
SUM(Albumes) AS Albumes,
SUM(Cancion) AS Cancion,
G.Origen,
G.Genero,
DATE_FORMAT(G.Inicio, "%Y") AS FechaInicio,
DATE_FORMAT(G.Fin, "%Y") AS FechaFin,
DATE_FORMAT(G.Inicio, '%Y-%m-%d') AS Inicio,
G.Fin AS Fin,
G.Sellos,
G.Estado,
G.SitioWeb,
G.Idioma,
G.Logo
FROM(
SELECT 
a.idGrupo,
a.Nombre,
COUNT(idAlbum) AS Albumes,
0 AS Cancion,
a.Origen,
a.Genero,
DATE_FORMAT(a.Inicio, "%Y") AS FechaInicio,
DATE_FORMAT(a.Fin, "%Y") AS FechaFin,
DATE_FORMAT(a.Inicio, '%Y-%m-%d') AS Inicio,
a.Fin AS Fin,
a.Sellos,
a.Estado,
a.SitioWeb,
a.Idioma,
a.Logo
FROM Grupo AS a
LEFT JOIN Album as c2
ON a.idGrupo = c2.idGrupo
GROUP BY (a.idGrupo)

UNION ALL

SELECT
b.idGrupo,
b.Nombre,
0 AS Albumes,
COUNT(idCancion) AS Cancion,
b.Origen,
b.Genero,
DATE_FORMAT(b.Inicio, "%Y") AS FechaInicio,
DATE_FORMAT(b.Fin, "%Y") AS FechaFin,
DATE_FORMAT(b.Inicio, '%Y-%m-%d') AS Inicio,
b.Fin AS Fin,
b.Sellos,
b.Estado,
b.SitioWeb,
b.Idioma,
b.Logo
FROM Grupo AS b
LEFT JOIN Canciones AS c1
ON b.idGrupo = c1.idGrupo
GROUP BY (b.idGrupo)
) AS G 
GROUP BY G.idGrupo
ORDER BY (G.Nombre);

/* ------------------------------------------------------------------ ARTISTA GRUPO ------------------------------------------------------------------ */
CREATE OR REPLACE VIEW
Vista_GrupoIntegrantes AS
SELECT
Artista_Grupo.Codigo,
Artista.idArtista,
Artista.Nombre,
Artista.NombreArtistico,
IF (Artista.Genero = 'H', 'Hombre', 'Mujer') AS Genero,
DATE_FORMAT(Artista.FechaNacimiento, "%d / %M / %Y") AS FechaNacimiento,
DATE_FORMAT(Artista.FechaFinado, "%d / %M / %Y") AS FechaFinado,

CASE
WHEN Artista.FechaFinado IS NULL OR Artista.FechaFinado <= 0 THEN CONCAT_WS(' ', TIMESTAMPDIFF(YEAR, Artista.FechaNacimiento, NOW()), 'años')
WHEN Artista.FechaFinado <= 0 THEN 'Fecha Invalida'
WHEN Artista.FechaNacimiento <= Artista.FechaFinado THEN CONCAT_WS(' ', TIMESTAMPDIFF(YEAR, Artista.FechaNacimiento, Artista.FechaFinado), 'años')
ELSE 'Fecha Invalida'
END AS Edad,

FORMAT(Artista.Estatura, 2) AS Estatura,
CONCAT_WS(' - ', Pais.Nombre, Pais.Nacionalidad) AS Pais,
Instrumento.Nombre AS Instrumento,
Artista.TipoVoz,
Artista.Foto,
DATE_FORMAT(Artista_Grupo.FechaInicio, "%Y") AS FechaInicio,
DATE_FORMAT(Artista_Grupo.FechaFin, "%Y") AS FechaFin,

CASE
WHEN Artista_Grupo.FechaFin IS NULL OR Artista_Grupo.FechaFin <= 0 THEN CONCAT_WS(' - ', YEAR(Artista_Grupo.FechaInicio), 'Actualidad')
ELSE CONCAT_WS(' - ', YEAR(Artista_Grupo.FechaInicio), YEAR(Artista_Grupo.FechaFin))
END AS Periodo,

Grupo.idGrupo,
Grupo.Nombre AS Grupo
FROM Artista
INNER JOIN Pais
ON Artista.idNacionalidad = Pais.idPais

LEFT JOIN Artista_Grupo
ON Artista.idArtista = Artista_Grupo.idArtista

LEFT JOIN Grupo
ON Grupo.idGrupo = Artista_Grupo.idGrupo

INNER JOIN Instrumento
ON Artista_Grupo.idInstrumento = Instrumento.idInstrumento

ORDER BY Nombre, FechaInicio DESC;

/* --------------------------------------------------------------------- DISQUERA --------------------------------------------------------------------- */
CREATE OR REPLACE VIEW
Vista_Disquera AS
SELECT
Disquera.idDisquera,
Disquera.Nombre,
DATE_FORMAT(Disquera.Fundacion, "%M / %Y") AS Fundacion,
Disquera.Fundador,
Disquera.Generos,
Pais.Nombre AS Pais,
Disquera.Logo
FROM Disquera
INNER JOIN Pais
ON Disquera.idPais = Pais.idPais
ORDER BY Nombre;

/* ---------------------------------------------------------------------- ALBUM ---------------------------------------------------------------------- */
CREATE OR REPLACE VIEW
Vista_Album AS
SELECT
Album.idAlbum,
Album.idGrupo,
Album.idDisquera,
Grupo.Nombre AS Grupo,
Disquera.Nombre AS Disquera,
Album.Nombre AS Nombre,
CONCAT_WS(' - ', Album.Nombre, Grupo.Nombre) AS Album,
COUNT(Canciones_Album.idCancion) AS Canciones,
IF(DATE_FORMAT(Album.Duracion, "%H") = '00', DATE_FORMAT(Album.Duracion, "%i:%s"), DATE_FORMAT(Album.Duracion, "%H:%i:%s")) AS DuracionF,
Album.Duracion AS Duracion,
DATE_FORMAT(Album.Lanzamiento, "%Y-%m-%d") AS Lanzamiento,
DATE_FORMAT(Album.Lanzamiento, "%d / %M / %Y") AS FechaLanzamiento,
Album.Grabacion,
Album.Genero,
Album.Portada
FROM Album
INNER JOIN Grupo
ON Album.idGrupo = Grupo.idGrupo

INNER JOIN Disquera
ON Album.idDisquera = Disquera.idDisquera

LEFT JOIN Canciones_Album
ON Album.idAlbum = Canciones_Album.idAlbum

GROUP BY(Album.idAlbum)
ORDER BY (Album.Nombre);

/* -------------------------------------------------------------------- CANCIONES -------------------------------------------------------------------- */
CREATE OR REPLACE VIEW
Vista_Canciones AS
SELECT
Canciones.idCancion,
/* Canciones.Nombre, */
CASE
WHEN Canciones.Interpretacion <> 'Original' THEN CONCAT(Canciones.Nombre, ' ( ', Canciones.Interpretacion, ' ) ')
ELSE Canciones.Nombre
END AS Nombre,
DATE_FORMAT(Canciones.Duracion, "%i:%s") AS Duracion,
DATE_FORMAT(Canciones.Publicacion, "%d / %M / %Y") AS Publicacion,
CASE
WHEN Canciones.Interpretacion <> 'Original' THEN CONCAT(Canciones.Nombre, ' - ', Grupo.Nombre, ' ( ', Canciones.Interpretacion, ' ) ')
ELSE CONCAT_WS(' - ', Canciones.Nombre, Grupo.Nombre) 
END AS Cancion,
Canciones.Genero,
Canciones.Idioma,
Canciones.Interpretacion,
Grupo.Nombre AS Grupo
FROM Canciones
LEFT JOIN Grupo
ON Grupo.idGrupo = Canciones.idGrupo
ORDER BY Nombre;

/* ----------------------------------------------------------------- CANCIONES ALBUM ----------------------------------------------------------------- */
CREATE OR REPLACE VIEW
Vista_CancionesAlbum AS
SELECT
Canciones_Album.Codigo,
Canciones.idCancion,
Album.idAlbum,
Album.Nombre AS Album,
Canciones_Album.Numero,
/* Canciones.Nombre, */
CASE
WHEN Canciones.Interpretacion <> 'Original' THEN CONCAT(Canciones.Nombre, ' ( ', Canciones.Interpretacion, ' ) ')
ELSE Canciones.Nombre
END AS Nombre,
DATE_FORMAT(Canciones.Duracion, "%i:%s") AS Duracion,
DATE_FORMAT(Publicacion, "%d / %M / %Y") AS Publicacion,
Canciones.Genero,
Idioma
FROM Canciones
INNER JOIN Canciones_Album
ON Canciones.idCancion = Canciones_Album.idCancion
INNER JOIN Album
ON Album.idAlbum = Canciones_Album.idAlbum
ORDER BY Nombre;

/* ----------------------------------------------------------------- CANCIONES GRUPO ----------------------------------------------------------------- */
CREATE OR REPLACE VIEW
Vista_CancionesGrupo AS
SELECT
Canciones.idCancion,
Grupo.idGrupo,
Grupo.Nombre AS Grupo,
CASE
WHEN Canciones.Interpretacion <> 'Original' THEN CONCAT(Canciones.Nombre, ' ( ', Canciones.Interpretacion, ' ) ')
ELSE Canciones.Nombre
END AS Nombre,
GROUP_CONCAT(album.Nombre separator ', ') AS Albums,
DATE_FORMAT(Canciones.Duracion, "%i:%s") AS Duracion,
DATE_FORMAT(Canciones.Publicacion, "%Y") AS Publicacion,
Canciones.Genero,
Canciones.Idioma,
Canciones.Interpretacion
FROM Canciones
LEFT JOIN Grupo
ON Grupo.idGrupo = Canciones.idGrupo
LEFT JOIN canciones_album
ON canciones.idCancion = canciones_album.idCancion
LEFT JOIN album
ON album.idalbum = canciones_album.idalbum
GROUP BY idCancion
ORDER BY Nombre, Album.Nombre;

/* ----------------------------------------------------------------------------- PROCEDIMIENTOS ALMACENADOS ----------------------------------------------------------------------------- */
/* ------------------------------------------------------------------ ARTISTA GRUPO ------------------------------------------------------------------ */
DELIMITER $$
CREATE PROCEDURE `obtener_integrantes`(IN idGrupoB INT)
BEGIN
SELECT * FROM Vista_GrupoIntegrantes WHERE idGrupo = idGrupoB;
END$$

DELIMITER ;

/* ------------------------------------------------------------------- ALBUM GRUPO ------------------------------------------------------------------- */
DELIMITER $$
CREATE PROCEDURE `obtener_album`(IN idGrupoB INT)
BEGIN
SELECT * FROM Vista_Album WHERE idGrupo = idGrupoB ORDER BY Lanzamiento;
END$$

DELIMITER ;

/* ----------------------------------------------------------------- CANCIONES ALBUM ----------------------------------------------------------------- */
DELIMITER $$
CREATE PROCEDURE `obtener_cancionesAlbum`(IN idAlbumA INT)
BEGIN
    SELECT 
        Codigo, 
        idCancion, 
        idAlbum, 
        Album, 
        Numero, 
        GROUP_CONCAT(Nombre separator ' / ') AS Nombre,
        DATE_FORMAT(sec_to_time(SUM(time_to_sec(Duracion))), "%H:%i")  AS Duracion,
        Publicacion,
        Genero,
        Idioma
    FROM Vista_CancionesAlbum WHERE idAlbum = idAlbumA GROUP BY Numero ORDER BY Numero;
END$$

DELIMITER ;

/* ----------------------------------------------------------------- CANCIONES GRUPO ----------------------------------------------------------------- */
DELIMITER $$
CREATE PROCEDURE `obtener_canciones`(IN idGrupoB INT)
BEGIN
SELECT * FROM Vista_CancionesGrupo WHERE idGrupo = idGrupoB;
END$$

DELIMITER ;