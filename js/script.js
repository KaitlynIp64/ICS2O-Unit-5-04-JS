// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Apr 2022
// This file contains xxx

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-04-JS/sw.js", {
    scope: "/ICS2O-Unit-5-04-JS/",
  })
}

/**
 * Input
 */
function myButtonClicked() {
  const day = document.getElementById("day").checked;
  const age = document.getElementById("age").checked;
  var tuesday = document.getElementById("tuesday")
  var thursday = document.getElementById("thursday")
  
  // process
  if ((day == tuesday || day == thursday) || (age > 12 && age < 21)) {
      document.getElementById("answer").innerHTML= 
        "You're eligible for student pricing.";
  } else if {
      document.getElementById("answer").innerHTML= 
        "You must pay regular price.";
  }
}
