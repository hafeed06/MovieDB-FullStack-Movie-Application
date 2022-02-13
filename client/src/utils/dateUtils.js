const getRawDate = (inputDate) => {
    let tempDate = new Date(inputDate).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      tempDate = tempDate.split("/").join("-")
      console.log(tempDate)
      return tempDate
}

export const getFrenchDate = (inputDate) => {
  let tempDate = new Date(inputDate).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    return tempDate
}

export const getHyphenFrenchDate = (inputDate) => {
  let tempDate = new Date(inputDate).toLocaleDateString("fr-FR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    tempDate = tempDate.split("/").join("-")
    return tempDate
}

export const rollBackAnHour = (inputDate) => {
  let tempDate = new Date(inputDate)
  tempDate.setHours(tempDate.getHours() - 1);
  return tempDate
}

export default getRawDate