import React, {useState, useEffect} from 'react';
import{AiFillEye, AiFillGithub} from 'react-icons/ai';

import{motion} from 'framer-motion';
import {AppWrap} from '../../wrapper';
import {urlFor, client} from '../../client';
import './Publication.scss';
const Publication = () => {
  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setanimateCard] = useState({y:0, opacity:1});
  const [Publications, setPublications] = useState([]);
  const [filterPublication, setFilterPublication] = useState([]);
  useEffect(() => {
    const query = '*[_type=="publications"]';
    client.fetch(query)
    .then((data) => {
      setPublications(data);
      setFilterPublication(data);
    })
   
  }, [])
  
  const handePublicationFilter = (item) => {
    setactiveFilter(item);
    setanimateCard([{y:100, opacity:0}]);
    
    setTimeout(()=>{
      setanimateCard([{y:0, opacity:1}]);
      if(item === 'All'){
        setFilterPublication(Publications);
      }
      else{
        setFilterPublication(Publications.filter((Publication) => Publication.tags.includes(item)));
      }
    }, 500)
  }
  return (
    <>
    <h2 className="head-text" > <span>Publications</span> </h2>
    <div className="app__Publication-filter">
      {['Software Development', 'Computational Biology', 'Machine Learning', 'Data Analysis','All'].map((item, index) =>(
        <div
        key={index}
        onClick={() => handePublicationFilter(item)}
        className={`app__Publication-filter-item app__flex p-text ${activeFilter === item?'item-active':''}`}
        >
          {item}
        </div>
      ))}     
    </div>
    <motion.div
    animate={animateCard}
    transition={{duration:0.5, delayChildren:0.5}}
    className="app__Publication-portfolio"
    >

    {filterPublication.map((Publication, index) => (
      <div className='app__Publication-item app__flex' key = {index}>
        <div className='app__Publication-img app__flex'>
          {
            Publication.imgUrl && (
              <img src = {urlFor(Publication.imgUrl).url()} alt={Publication.name}/>
            )
          }
          <motion.div
          whileHover={{opacity:[0,1]}}
          transition={{duration:0.25, ease:'easeInOut', staggerChildren:0.5}}
          className="app__Publication-hover app__flex"
          >
            <a href = {Publication.publicationLink} target="_blank" rel="noreferrer">

            <motion.div
            whileInView={{scale:[0,1]}}
            whileHover={{scale:[1,0.9]}}
            transition={{duration:0.25}}
            className="app__flex"
            >
              <AiFillEye/>
          </motion.div>
            </a>
          </motion.div>
          
        </div>
        {
            activeFilter && (
       <div className='app__Publication-content app__flex'>
        <h4 className='bold-text'>{Publication.title}</h4>
        <p className='p-text' style={{marginTop:10}}>{Publication.description}</p>
        <div className='app__Publication-tag app__flex'>
          <p className='p-text'>{activeFilter !== 'All'?activeFilter:Publication.tags[0]}</p>
        </div>
        </div> 
            )}
      </div>
    ))}
    </motion.div>
    </>
  );
}

export default AppWrap(Publication, 'publications');