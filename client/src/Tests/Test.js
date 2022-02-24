const finalData = {
    "username":data.username,
    "password":data.password,
    "roles": [
        {
            "role":"USER"
        }
    ],
    "contacts": [
                {
            "name":`${data.firstname} ${data.lastname}`,
            "birthdate": JDBCDateParsing(data.birthdate),
            "gender": data.gender,
            "email":data.email,
            "addresses": [
                {
                    "country":data.country,
                    "area":data.area,
                    "city":data.city,
                    "street": data.street,
                    "number":data.number
                }
            ]
        }
    ]
}