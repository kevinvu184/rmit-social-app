import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import './MapComponent.css'
import Marker from './Marker.tsx'

// AIzaSyAFHimzetOpx23Kfe1StFycHp9mToZZCnA
//-37.808362, 144.963315

class MapComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: -37.808362,
                lng: 144.963315
            },
            zoom: 17
        }
        this.selectCityCampus = this.selectCityCampus.bind(this);
        this.cityCampusInfo = this.cityCampusInfo.bind(this);
        this.selectBundoora = this.selectBundoora.bind(this);
        this.selectPointCook = this.selectPointCook.bind(this);
        this.selectBrunswich = this.selectBrunswich.bind(this);
        this.selectHamilton = this.selectHamilton.bind(this);
    }

    static defaultProps = {
        center: {
            lat: -37.808362,
            lng: 144.963315
        },
        zoom: 17
    };

    selectCityCampus() {
        let selectedBuildings = '';
        selectedBuildings += '<option value="1">Building 1</option>';
        selectedBuildings += '<option value="2">Building 2</option>';
        selectedBuildings += '<option value="3">Building 3</option>';
        selectedBuildings += '<option value="4">Building 4</option>';
        selectedBuildings += '<option value="5">Building 5</option>';
        selectedBuildings += '<option value="6">Building 6</option>';
        selectedBuildings += '<option value="7">Building 7</option>';
        selectedBuildings += '<option value="8">Building 8</option>';
        selectedBuildings += '<option value="9">Building 9</option>';
        selectedBuildings += '<option value="10">Building 10</option>';
        selectedBuildings += '<option value="11">Building 11</option>';
        selectedBuildings += '<option value="12">Building 12</option>';
        selectedBuildings += '<option value="13">Building 13</option>';
        selectedBuildings += '<option value="14">Building 14</option>';
        selectedBuildings += '<option value="15">Building 15</option>';
        selectedBuildings += '<option value="16">Building 16</option>';
        selectedBuildings += '<option value="18">Building 18</option>';
        selectedBuildings += '<option value="19">Building 19</option>';
        selectedBuildings += '<option value="20">Building 20</option>';
        selectedBuildings += '<option value="21">Building 21</option>';
        selectedBuildings += '<option value="22">Building 22</option>';
        selectedBuildings += '<option value="23">Building 23</option>';
        selectedBuildings += '<option value="24">Building 24</option>';
        selectedBuildings += '<option value="28">Building 28</option>';
        selectedBuildings += '<option value="37">Building 37</option>';
        selectedBuildings += '<option value="38">Building 38</option>';
        selectedBuildings += '<option value="39">Building 39</option>';
        selectedBuildings += '<option value="42">Building 42</option>';
        selectedBuildings += '<option value="43">Building 43</option>';
        selectedBuildings += '<option value="44">Building 44</option>';
        selectedBuildings += '<option value="45">Building 45</option>';
        selectedBuildings += '<option value="46">Building 46</option>';
        selectedBuildings += '<option value="47">Building 47</option>';
        selectedBuildings += '<option value="49">Building 49</option>';
        selectedBuildings += '<option value="50">Building 50</option>';
        selectedBuildings += '<option value="51">Building 51</option>';
        selectedBuildings += '<option value="52">Building 52</option>';
        selectedBuildings += '<option value="53">Building 53</option>';
        selectedBuildings += '<option value="55">Building 55</option>';
        selectedBuildings += '<option value="56">Building 56</option>';
        selectedBuildings += '<option value="57">Building 57</option>';
        selectedBuildings += '<option value="66">Building 66</option>';
        selectedBuildings += '<option value="69">Building 69</option>';
        selectedBuildings += '<option value="70">Building 70</option>';
        selectedBuildings += '<option value="71">Building 71</option>';
        selectedBuildings += '<option value="73">Building 73</option>';
        selectedBuildings += '<option value="74">Building 74</option>';
        selectedBuildings += '<option value="75">Building 75</option>';
        selectedBuildings += '<option value="76">Building 76</option>';
        selectedBuildings += '<option value="78">Building 78</option>';
        selectedBuildings += '<option value="80">Building 80</option>';
        selectedBuildings += '<option value="81">Building 81</option>';
        selectedBuildings += '<option value="82">Building 82</option>';
        selectedBuildings += '<option value="88">Building 88</option>';
        selectedBuildings += '<option value="89">Building 89</option>';
        selectedBuildings += '<option value="91">Building 91</option>';
        selectedBuildings += '<option value="93">Building 93</option>';
        selectedBuildings += '<option value="94">Building 94</option>';
        selectedBuildings += '<option value="95">Building 95</option>';
        selectedBuildings += '<option value="96">Building 96</option>';
        selectedBuildings += '<option value="97">Building 97</option>';
        selectedBuildings += '<option value="98">Building 98</option>';
        selectedBuildings += '<option value="100">Building 100</option>';
        selectedBuildings += '<option value="101">Building 101</option>';
        selectedBuildings += '<option value="105">Building 105</option>';
        selectedBuildings += '<option value="107">Building 107</option>';
        selectedBuildings += '<option value="108">Building 108</option>';
        selectedBuildings += '<option value="113">Building 113</option>';
        selectedBuildings += '<option value="150">Building 150</option>';
        selectedBuildings += '<option value="154">Building 154</option>';
        document.getElementById("chosenbuilding").innerHTML = selectedBuildings;
        this.setState({
            center: {
                lat: -37.808362,
                lng: 144.963315
            },
            zoom: 17
        })
    }

    cityCampusInfo() {
        document.getElementById("city-campus").innerHTML = '<span>Hello</span>';
    }

    selectBundoora() {
        let selectedBuildings = '';
        selectedBuildings += '<option value="201">Building 201</option>';
        selectedBuildings += '<option value="202">Building 202</option>';
        selectedBuildings += '<option value="203">Building 203</option>';
        selectedBuildings += '<option value="204">Building 204</option>';
        selectedBuildings += '<option value="205">Building 205</option>';
        selectedBuildings += '<option value="206">Building 206</option>';
        selectedBuildings += '<option value="207">Building 207</option>';
        selectedBuildings += '<option value="208">Building 208</option>';
        selectedBuildings += '<option value="209">Building 209</option>';
        selectedBuildings += '<option value="210">Building 210</option>';
        selectedBuildings += '<option value="211">Building 211</option>';
        selectedBuildings += '<option value="213">Building 213</option>';
        selectedBuildings += '<option value="214">Building 214</option>';
        selectedBuildings += '<option value="215">Building 215</option>';
        selectedBuildings += '<option value="216">Building 216</option>';
        selectedBuildings += '<option value="217">Building 217</option>';
        selectedBuildings += '<option value="218">Building 218</option>';
        selectedBuildings += '<option value="220">Building 220</option>';
        selectedBuildings += '<option value="222">Building 222</option>';
        selectedBuildings += '<option value="223">Building 223</option>';
        selectedBuildings += '<option value="224">Building 224</option>';
        selectedBuildings += '<option value="230">Building 230</option>';
        selectedBuildings += '<option value="239">Building 239</option>';
        selectedBuildings += '<option value="251">Building 251</option>';
        selectedBuildings += '<option value="252">Building 252</option>';
        selectedBuildings += '<option value="253">Building 253</option>';
        selectedBuildings += '<option value="254">Building 254</option>';
        selectedBuildings += '<option value="255">Building 255</option>';
        selectedBuildings += '<option value="256">Building 256</option>';
        selectedBuildings += '<option value="257">Building 257</option>';
        selectedBuildings += '<option value="258">Building 258</option>';
        selectedBuildings += '<option value="300">Building 300</option>';
        document.getElementById("chosenbuilding").innerHTML = selectedBuildings;
        this.setState({
            center: {
                lat: -37.680554,
                lng: 145.063212
            },
            zoom: 18
        })
    }
    selectPointCook() {
        let selectedBuildings = '';
        selectedBuildings += '<option value="450">Building 450</option>';
        document.getElementById("chosenbuilding").innerHTML = selectedBuildings;
        this.setState({
            center: {
                lat: -37.928896,
                lng: 144.749034
            },
            zoom: 19
        })
    }
    selectBrunswich() {
        let selectedBuildings = '';
        selectedBuildings += '<option value="511">Building 511</option>';
        selectedBuildings += '<option value="512">Building 512</option>';
        selectedBuildings += '<option value="513">Building 513</option>';
        selectedBuildings += '<option value="514">Building 514</option>';
        selectedBuildings += '<option value="515">Building 515</option>';
        selectedBuildings += '<option value="516">Building 516</option>';
        document.getElementById("chosenbuilding").innerHTML = selectedBuildings;
        this.setState({
            center: {
                lat: -37.772149,
                lng: 144.958104
            },
            zoom: 19
        })
    }
    selectHamilton() {
        let selectedBuildings = '';
        selectedBuildings += '<option value="601">Building 601</option>';
        selectedBuildings += '<option value="602">Building 602</option>';
        selectedBuildings += '<option value="603">Building 603</option>';
        selectedBuildings += '<option value="604">Building 604</option>';
        selectedBuildings += '<option value="605">Building 605</option>';
        selectedBuildings += '<option value="606">Building 606</option>';
        selectedBuildings += '<option value="607">Building 607</option>';
        selectedBuildings += '<option value="608">Building 608</option>';
        selectedBuildings += '<option value="609">Building 609</option>';
        document.getElementById("chosenbuilding").innerHTML = selectedBuildings;
        this.setState({
            center: {
                lat: -37.744042,
                lng: 142.058161
            },
            zoom: 19
        })
    }

    render() {
        return (
            <div className="container">
                <div className="box">
                    <h3 className="text-center">RMIT Maps</h3>
                    <div className="row">
                        <div className="col-6">
                            <div class="input-group mb-4 mt-1">
                                <select class="custom-select">
                                    <option selected>Please select Campus</option>
                                    <option value="0" onClick={this.selectCityCampus.bind(this)}>Melbourne City Campus</option>
                                    <option value="1" onClick={this.selectBundoora.bind(this)}>Bundoora Campus</option>
                                    <option value="2" onClick={this.selectPointCook.bind(this)}>PointCook</option>
                                    <option value="3" onClick={this.selectBrunswich.bind(this)}>Brunswich Campus</option>
                                    <option value="4" onClick={this.selectHamilton.bind(this)}>Hamilton</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6">
                            <div class="input-group mb-4 mt-1">
                                <select class="custom-select" id="chosenbuilding">
                                    <option selected>Choose a building</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-custom">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyAFHimzetOpx23Kfe1StFycHp9mToZZCnA' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                        center={this.state.center}
                        zoom={this.state.zoom}
                    >
                        <Marker
                            id="city-campus"
                            lat={-37.808362}
                            lng={144.963315}
                            text="Melbourne City Campus"
                            onClick={this.cityCampusInfo.bind(this)}
                        />
                        <Marker
                            lat={-37.680554}
                            lng={145.063212}
                            text="Bundoora Campus"
                        />
                        <Marker
                            lat={-37.928896}
                            lng={144.749034}
                            text="PointCook"
                        />
                        <Marker
                            lat={-37.772149}
                            lng={144.958104}
                            text="Brunswich Campus"
                        />
                        <Marker
                            lat={-37.744042}
                            lng={142.058161}
                            text="Hamilton"
                        />
                    </GoogleMapReact>
                </div>
            </div>
        );
    }
}

export default MapComponent