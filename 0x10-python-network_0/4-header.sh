#!/bin/bash
#URL as an argument, sends a GET request to the URL, and displays the body of the response
curl -sH "X-school-user-Id: 98" "${1}"
