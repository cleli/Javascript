import { h } from 'hyperapp'

// Titre d'une card avec l'icône d'information et la div correspondante
export default (props) =>
    h('p', {}, [props.title, h('i', {class: 'fas fa-question-circle'}, ''), h('div', {class: 'info'}, [h('p', {}, props.infos)])])
