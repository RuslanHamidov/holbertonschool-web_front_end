const roomDimensions = {
    width: 50,
    length: 100,
    getArea: (width, length) =>{
        return width * length;   
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);