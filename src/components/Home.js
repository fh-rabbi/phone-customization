import styles from './css/home.module.css'

export default function Home(){
  return(
    <>
      <main class={styles.main}>
        <h1>Phone Customization</h1>
        <p>Hi there, in this site available some collections of android ui customization materials</p>
        <div class="">
          <img width="70%" height="400px" class="" src="https://user-images.githubusercontent.com/71178740/182629758-44e28281-5d5d-4cdb-91d9-5b44d8f9f1ee.png" alt="demo" />
        </div>
      </main>      
    </>
  );
}