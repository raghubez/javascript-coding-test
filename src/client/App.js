import React, { useState, useEffect } from 'react';
import './app.css';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
`
const ConditionWrapper = styled.div`
  width: 300px;
  margin: 10px;
`

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: left;
`
const ImageWrapper = styled.div`
  min-height: 310px;
`
const Image = styled.img`
  height: 300px;
  width: 300px;
`

const Snippet = styled.div`
  text-align: left;
`

const MoreText = styled.span`
  color: green;
  font-weight: bold;
`

const App = () => {
  const [ conditions, setConditions ] = useState([]);

  useEffect(() => {
    fetch('/api/conditions')
      .then(res => res.json())
      .then(data => setConditions(data.conditions));
  }, [])

  const getTruncatedText = (text, maxLimit) => {
    console.log(text.length);
    return text.length > maxLimit ? <>{`${(text).substring(0, maxLimit-15)} ...`}<MoreText>find out more</MoreText></> : text;
  }

  return (
    <Wrapper>
      {conditions.map(condition => {
        return(
          <ConditionWrapper>
            <ImageWrapper>
              <Image
                src={condition.image || "https://via.placeholder.com/300" }
                onError={(e)=>{e.target.onerror = null; e.target.src="https://via.placeholder.com/300"}}
              />
            </ImageWrapper>
            <Title>{condition.label || ""}</Title>
            <Snippet>{condition.snippet ? getTruncatedText(condition.snippet, 80) : ""}</Snippet>
          </ConditionWrapper>
        )
      })}
    </Wrapper>
  );
}

export default App;
