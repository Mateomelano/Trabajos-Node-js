const libros = [
    { id: "1", titulo: "Libro 1", autor: "Autor 1" },
    { id: "2", titulo: "Libro 2", autor: "Autor 2" },
    { id: "3", titulo: "Libro 3", autor: "Autor 3" },
  ];
  
  const Libro = {
    find: async () => libros,
  };
  
  module.exports = Libro;
  