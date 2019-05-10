import React, {Component} from 'react';
import Button from '@material/react-button';
import Switch from '@material/react-switch';
import TextField, {Input} from '@material/react-text-field';
import Select, {Option} from '@material/react-select';
import Radio, {NativeRadioControl} from '@material/react-radio';
import {Headline4} from '@material/react-typography';
import './App.scss';

class App extends Component {
    state = {
        citizenship: false,
        members: false,
        voter: '',
        candidate: '',
        citizenshipValue: null,
        parliamentValue: null
    };

    render() {
        return (
            <div className="App">
                <Headline4>Prezidento rinkimai 2019</Headline4>
                <TextField
                    label='Jūsų vardas'
                ><Input
                    value={this.state.voter}
                    onChange={(e) => this.setState({voter: e.currentTarget.value})}/>
                </TextField>
                <br/>
                <Select
                    label='Pasirinkite kandidatą'
                    value={this.state.candidate}
                    onChange={(evt) => this.setState({candidate: evt.target.value})}
                >
                    <option value="" selected></option>
                    <Option value='Andriukaitis'>Vytenis Povilas Andriukaitis</Option>
                    <Option value='Juozaitis'>Arvydas Juozaitis</Option>
                    <Option value='Mazuronis'>Valentinas Mazuronis</Option>
                    <Option value='Nausėda'>Gitanas Nausėda</Option>
                    <Option value='Puidokas'>Mindaugas Puidokas</Option>
                    <Option value='Puteikis'>Naglis Puteikis</Option>
                    <Option value='Skvernelis'>Saulius Skvernelis</Option>
                    <Option value='Šimonytė'>Ingrida Šimonytė</Option>
                    <Option value='Tomaševksi'>Valdemar Tomaševski</Option>
                </Select>
                <br/>
                    <Switch
                        nativeControlId='citizenship'
                        checked={this.state.citizenship}
                        onChange={(e) => this.setState({citizenship: e.target.checked})}/>
                    <label htmlFor='citizenship'>Ar balsuosite dvigubos pilietybės referendume?</label>
                <Radio label='Balsuoti už' key='yes'>
                    <NativeRadioControl
                        disabled={!this.state.citizenship}
                        name='citizenship'
                        value='yes'
                        id='yes'
                        onChange={(e) => this.setState({citizenshipValue: e.target.value})}
                    />
                </Radio>
                <Radio label='Balsuoti prieš' key='no'>
                    <NativeRadioControl
                        disabled={!this.state.citizenship}
                        name='citizenship'
                        value='no'
                        id='no'
                        onChange={(e) => this.setState({citizenshipValue: e.target.value})}
                    />
                </Radio>
                <br/>
                    <Switch
                        nativeControlId='members'
                        checked={this.state.members}
                        onChange={(e) => this.setState({members: e.target.checked})}/>
                    <label htmlFor='citizenship'>Ar balsuosite seimo narių mažinimo referendume?</label>
                <Radio label='Balsuoti už' key='yes'>
                    <NativeRadioControl
                        disabled={!this.state.members}
                        name='members'
                        value='yes'
                        id='yes'
                        onChange={(e) => this.setState({parliamentValue: e.target.value})}
                    />
                </Radio>
                <Radio label='Balsuoti prieš' key='no'>
                    <NativeRadioControl
                        disabled={!this.state.members}
                        name='members'
                        value='no'
                        id='no'
                        onChange={(e) => this.setState({parliamentValue: e.target.value})}
                    />
                </Radio>
                <br/>
                <Button
                    outlined
                    disabled = {!this.state.candidate}
                    className='button-alternate'
                    onClick={() => window.alert('Jūsų pasirinktas kandidatas: ' + this.state.candidate +
                    '. Ačiū, kad balsuojate!')
                    }
                >
                    Balsuoti!
                </Button>
            </div>
        );
    }
}

export default App;
