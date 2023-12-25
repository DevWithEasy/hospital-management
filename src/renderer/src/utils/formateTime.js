const formateTime = (time) => {

    const parsedTime = new Date(`2000-01-01T${time}:00`);

    return parsedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

}

export default formateTime