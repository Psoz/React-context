import React, {useContext,useState,useEffect} from 'react';
import CategoryContext from '../../../../context/Category';
import styles from './AddPostForm.module.scss';

const AddPostForm = ({eventHandler,forms}) => {

  const { categories:contextCategories } = useContext(CategoryContext);
  
  const [categories, setCategories] = useState(contextCategories);

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    setCategories(contextCategories);
  },[contextCategories]);

  const categoryForm = () => {
    if(!categories.length){
      return null;
    }
    return(
      <div className={styles.elementWrapper}>
        <lable>Categories</lable>
        {categories.map((categorie) => {
          return(
          <div key={categorie.name}>
            <input type="radio" onChange={(event)=>handleInputChange(event)} id={categorie.name} name="category" value={categorie.name} required/>
            <span>{categorie.name}</span><br/>
          </div>)
          
        })}
      </div>
    )
  }

  const handleInputChange = (event) => {
    const target = event.target;
    setInputs(inputs => ({
      ...inputs,
      [target.name]: target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    eventHandler(inputs);
  }
  
      return (
       <div className={styles.wrapper}>
         <form onSubmit={handleSubmit}>
           {forms.elements.map(({type,name,placeholder}) => {
             if(type==="radio"){
              return (categoryForm());
             }
             return(
              <div className={styles.elementWrapper}>
                <span>{name}:</span>
                  <input type={type} name={name} onChange={(event)=>handleInputChange(event)} placeholder={placeholder} minLength="4"required/>
              </div>
             )
           })}
         <div className={styles.addButton}>
          <input className={styles.button} type="submit" value="Submit" />
         </div>
          
        </form>
       </div>
      )
  }
  
  export default AddPostForm;