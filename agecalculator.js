function calculateAge (birthDate, otherDate) {
    birthDate = new Date(birthDate);
    otherDate = new Date();

    var years = (otherDate.getFullYear() - birthDate.getFullYear());

    }
    console.log("You are "+ years+ " years old")

}
