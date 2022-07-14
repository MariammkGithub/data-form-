let Users = [{ "id": 1, "name": "Henrieta", "email": "hcrinidge0@mac.com", "gender": "Female" },
{ "id": 2, "name": "Terencio", "email": "tflett1@cam.ac.uk", "gender": "Male" },
{ "id": 3, "name": "Catherin", "email": "cmcmonnies2@reference.com", "gender": "Bigender" },
{ "id": 4, "name": "Staford", "email": "sreeks3@discuz.net", "gender": "Male" },
{ "id": 5, "name": "Pren", "email": "pgozzett4@cbslocal.com", "gender": "Male" },
{ "id": 6, "name": "Kali", "email": "kcurzon5@hud.gov", "gender": "Female" },
{ "id": 7, "name": "Bernette", "email": "bpoulney6@imdb.com", "gender": "Female" },
{ "id": 8, "name": "Gustaf", "email": "glardier7@yellowpages.com", "gender": "Male" },
{ "id": 9, "name": "Robin", "email": "rgostall8@admin.ch", "gender": "Non-binary" },
{ "id": 10, "name": "Frans", "email": "fsalzburger9@cisco.com", "gender": "Male" }]


                function display_Users() {
                    let rows = ""
                    for (user of Users) {
                        rows = rows + ` <tr>
                                          <td>${user.id}</td>
                                          <td>${user.name}</td>
                                          <td>${user.email}</td>
                                          <td>${user.gender}</td>
                                        </tr>`
                    }
                
                    document.getElementById('tbody_Data').innerHTML = rows

                }
               