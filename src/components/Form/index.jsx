import './form.css'
import Button from '../Button'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import { ptBR } from 'date-fns/locale';
import isValidYouTubeUrl from '../../helpers/isValidYouTubeUrl';
import axios from 'axios';
registerLocale('ptBR', ptBR)


function Form() {
  const [date, setDate] = useState (new Date())
  const [description, setDescription] = useState ('')
  const [information, setInformation] = useState ('')
  const [font, setFont] = useState ('')
  const [importance, setImportance] = useState ('')
  const [url, setUrl] = useState('')
  const [output, setOutput] = useState('')
  const [isValid, setIsValid] = useState(null);

  const baseURL = 'http://localhost:3000/news'

  function onChangeDate(event) {
    setDate(event.target.value)
  }

  function onChangeDescription(event) {
    setDescription(event.target.value)
  }

  function onChangeInformation(event) {
    setInformation(event.target.value)
    
  }

  function onChangeFont(event) {
    setFont(event.target.value)
    
  }

  function onChangeImportance(event) {
    setImportance(event.target.value)
    
  }

  function onChangeUrl(event) {
    setUrl(event.target.value)
    setIsValid(isValidYouTubeUrl(event.target.value));
    
  }

  function onClickButton(event) {
    var texts = description + " " + information + " " + font + " " + importance + " " + url
    const words = texts.split(" ")
    const filter = words.filter((word) => isNaN(word))
    filter.sort()
    sendPost()

    setOutput(
      date + "\n" + filter.join(' ')
    )
  }

  function sendPost() {
    axios
    .post(baseURL, {
      date: date,
      description: description,
      information: information,
      font: font,
      importance: importance,
      url: url
    })
    
  }
  return(
      <form onSubmit={(event) => event.preventDefault()}>

      <h3 className='Title'>Entenda o Caso</h3>
  
        <label className='TitleInput' id='InputNewsDate'>Data de publicação da noticia</label>
        <DatePicker
        id='InputNewsDate'
        className='form_input'
        placeholder='Insira a data de publicação da notícia.'
        onChange={(date) => setDate(date)}
        selected={date} locale={ptBR}
        dateFormat={'dd/MM/yyyy'}
        ></DatePicker>
        {/* <input type="text" id='InputNewsDate' className='form_input' placeholder='Insira a data de publicação da notícia.' onChange={onChangeDate} value={date}/> */}
  
        <label className='TitleInput'>Descreva o caso em poucas palavras</label>
        <textarea
          name="short_description"
          id="short_description"
          className='form_input'
          placeholder='Inclua informações básicas: o que aconteceu, com quem aconteceu, onde aconteceu, quando aconteceu e por que aconteceu.'
          onChange={onChangeDescription}
          value={description}
        ></textarea>
  
        <label className='TitleInput'>Contexto e informação adicional</label>
        <textarea
        name="context_information"
        id="context_information"
        className='form_input'
        placeholder='Informações relevantes podem incluir dados relevantes para a economia brasileira ou algo setor industrial específico, apurações adicionais e/ou análises de conjuntura entre outras'
        onChange={onChangeInformation}
        value={information}
        >{postMessage.description}</textarea>
  
        <label className='TitleInput'>Parte/Fonte</label>
        <input name="font" id="font" className='form_input'placeholder='insira a fonte ou parte envolvida...' onChange={onChangeFont} value={font}></input>
  
        <label className='TitleInput'>Porque entender o caso em questão importa?</label>
        <textarea name="case_importance" id="case_importance" className='form_input' placeholder='Explique de forma sucinta por que o caso é importante para o leitor.' onChange={onChangeImportance} value={importance}></textarea>
  
        <label className='TitleInput'>Deseja incluir link para o YouTube?</label>
        <input type="url" id='InputURL' className='form_input' placeholder='Insira o link completo ex.: https://www.google.com/' onChange={onChangeUrl} value={url}/>
        {url && !isValid &&(
          <p style={{ color: 'red' }}>URL inválida</p>
        )}
        <Button handleClickButton={onClickButton} disabled={url && !isValid}/>
  
        <hr />
  
        <h3 className='TitleOutput'>Saídas geradas</h3>
        <textarea disabled id='Output' className='form_input' value={output}></textarea>
        </form>
  )
    
}

export default Form