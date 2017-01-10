import angular from 'angular'
import 'bootstrap/dist/css/bootstrap.css'


let TodoCtrl = () => {
    this.greetings = 'Hello!'
}

angular.module('TodoApp', [])
    .controller('TodoCtrl', TodoCtrl)