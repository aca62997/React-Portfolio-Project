import React, { Component } from "react";

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
          bakeries: [
            {
              id: 0,
              name: "Chocolate Chip Cookies",
              image: "assets/images/chocolateChipCookie.jpeg",
              description:
                "Our best seller! Everyone loves our chocolate chip cookies!",
            },
            {
              id: 1,
              name: "Sugar Cookies ",
              image: "assets/images/sugarCookie.jpeg",
              description:
                "We offer them plain and with frosting. Please contact us in advance if you would like anything specific written on them.",
            },
            {
              id: 2,
              name: "Brownies",
              image: "assets/images/brownies.jpeg",
              description:
                "Nothing better than a warm brownie with a glass of milk!",
            },
            {
              id: 3,
              name: "Chocolate Cake",
              image: "assets/images/chocolateCake.jpeg",
              description:
                "Perfect for a birthday, party, or if you just are craving some cake!",
            },
            {
              id: 4,
              name: "Macarons",
              image: "assets/images/macarons.jpeg",
              description: "Delightful gourmet treats.",
            },
          ],
        };
        
    }

    render() {
        const directory = this.state.bakeries.map(bakery => {
            return (
                <div className="col">
                    <img src={bakery.image} alt={bakery.name} />
                    <h2>{bakery.name}</h2>
                    <p>{bakery.description}</p>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;
