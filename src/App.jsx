import React,{useEffect,useState} from 'react';
import alanBtn from'@alan-ai/alan-sdk-web';
import NewsCards from './componentt/NewsCards/NewsCards';
    // key 3aabde626c47429a9a5fed28e6f3f213
import useStyles from './styles';
const alanKey='1dcac9187744ea7841150aa398292a992e956eca572e1d8b807a3e2338fdd0dc/stage';
export default function App() { 
    const classes = useStyles();
    const[news,setNews]=useState([]);
    const[activeArticle,setActiveArticle]=useState(-1); 
    useEffect(()=>{
        alanBtn({
            key:alanKey,
            onCommand: function (commandData,number) {
                if (commandData.command === "home") {
                  console.log(commandData.y)
                }
                if (commandData.command === 'newHeadlines') {
                    setNews(commandData.data.data.articles);
                }
                if (commandData.command === 'highlight') {
                  setActiveArticle((prevActiveArticle)=>prevActiveArticle+1)
                }
                if (commandData.command === 'open') {
                  console.log("open");
                  console.log(number)
                  console.log(commandData);
                }
            },
        })
    },[])
  return (
    <div>
      <div className={classes.logoContainer}>
        {/* {newsArticles.length ? (
          <div className={classes.infoContainer}>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Open article number [4]</Typography></div>
            <div className={classes.card}><Typography variant="h5" component="h2">Try saying: <br /><br />Go back</Typography></div>
          </div>
        ) : null} */}
        <img src="https://miro.medium.com/max/1200/1*CJyCnZVdr-EfgC27MAdFUQ.jpeg" className={classes.alanLogo} alt="logo" />
      </div>
        <NewsCards articles={news} key={news} activeArticle={activeArticle}/>
    </div>
  )
}
