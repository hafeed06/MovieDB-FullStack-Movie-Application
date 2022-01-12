const JDBCDateParsing = (date) => {
    let dateParsing = new Date(date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      return dateParsing.split("/").reverse().join("-")
}

export default JDBCDateParsing; 
