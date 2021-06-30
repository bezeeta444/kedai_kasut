import { bold } from "colorette";
import React, { Component } from "react";
import './home.css';

export class home extends Component {
  state = {};

  render() {
    return (
      <section className="hero is-primary is-fullheight header-image">
        <div className="hero-body ">
          <div class="container has-text-centered">
            <p class="title">
              <h1><bold>WELCOME TO KASUT.CO</bold></h1>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default home;
