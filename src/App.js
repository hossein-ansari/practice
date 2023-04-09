import "./App.css";
import React, { Component } from "react";
import Carts from "./Carts";
class App extends Component {
  constructor() {
    super();
    this.state = {
      countriesData: {
        iran: ["tabriz", "fars", "esfahan", "mashhad"],
        unitedStates: ["chicago", "Los Angeles", "san diego"],
        canada: ["Toronto", "Vancouver", "Montreal"],
      },

      countrySelected: "",
      citiesData: [],
    };
  }
  selectCountryHandler(e) {
    let targetCountry = e.target.value;

    this.setState({ countrySelected: `${targetCountry}` });
    this.setState({ citiesData: this.state.countriesData[targetCountry] });
    console.log(this.state.countriesData[targetCountry]);
  }
  render() {
    return (
      <div>
        <div>
          <form action="">
            {/* /* country select */}
            <select
              onChange={this.selectCountryHandler.bind(this)}
              name=""
              id=""
            >
              <option value="iran">select</option>
              <option value="iran">iran</option>
              <option value="unitedStates">unitedStates</option>
              <option value="canada">canada</option>
            </select>
            {/* /* city select */}

            <select name="" id="">
              {this.state.countrySelected == false ? (
                <option value="">select</option>
              ) : (
                this.state.citiesData.map((city) => {
                  return <option value={city}>{city}</option>;
                })
              )}
            </select>
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
