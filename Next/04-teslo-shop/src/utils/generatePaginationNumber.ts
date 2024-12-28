export const generatePagination = (currentPage:number, totalPages:number)=>{

    // si el totalPages es menor a 7 retornamos pages sin puntos suspensivos
    if(totalPages <= 7){
        return Array.from({length:totalPages}, (_,i)=>i+1);
    }

    //Si la pagina esta entre las priomeras 3, mostramos las primas 3, ..., las ultimas dos
    if(currentPage <= 3){
        return [1,2,3,'...',totalPages - 1, totalPages];
    }

    // Si la pagiina esta entre las 2 ultimas se deben mostrar las primeras 2,... y las ultoimas 2
    if(currentPage >= totalPages - 2 ){
        return [1,2,'...',totalPages - 1, totalPages]
    }
    // si la pagina esta en otro lugar medio, mostrar la primera, ..., y la pagina catual y vecinos
    return [1,'...',currentPage - 1, currentPage, currentPage + 1, '...', totalPages];
    
}