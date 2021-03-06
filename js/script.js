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
  var day = document.getElementById("day").value
  var age = document.getElementById("age").value
  
  // process
  if (( day == "tuesday" || day == "thursday") || (age > 12 && age < 21)) {
      document.getElementById("answer").innerHTML= "You're eligible for student discount."
  } else {
      document.getElementById("answer").innerHTML= "You must pay regular price."
  }
}
