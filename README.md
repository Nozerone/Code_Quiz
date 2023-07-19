   <script>
        var foods = [
            {
                name: "burrito",
                ingredients: [
                    {
                        main: "meat",
                        secondary: "beans"
                    }
                ],
                vegan: false
            },
            {
                name: "taco",
                ingredients: [
                    {
                        main: "cheese",
                        secondary: "sadness"
                    }
                ],
                vegan: true
            },
            {
                name: "taquito",
                ingredients: [
                    {
                        main: "meat",
                        secondary: "fried oil"
                    }
                ],
                vegan: false
            },
            {
                name: "quesadilla",
                ingredients: [
                    {
                        main: "cheese",
                        secondary: "pure joy"
                    }
                ],
                vegan: true
            },
        ]


        document.querySelector("#question").addEventListener("click", (event) => {
            console.log(event)
        })
    </script>