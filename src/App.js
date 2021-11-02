import React, { Component } from "react";
import { v4 } from "uuid";

import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  formSubmitHandler = (data) => {
    if (
      this.state.contacts.some(
        (item) => item.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in your contacts`);
      return;
    }
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, { id: v4(), ...data }],
    }));
  };

  search = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  filter = () => {
    return this.state.contacts.filter((item) =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  delete = (id) => {
    this.setState({
      contacts: this.state.contacts.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={this.search} />
        <ContactList contacts={this.filter()} onDelete={this.delete} />
      </div>
    );
  }
}

export default App;
