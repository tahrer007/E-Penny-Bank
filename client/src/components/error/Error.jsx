import React from 'react' ;
import useUserInfo from 'hooks/useUserInfo';

function Error() {

  const {theme} = useUserInfo() ; 

  return (
    <section className={`innerContainer ${theme}`}> 
    
        <h1>
          Error , page not found 
        </h1>
    </section>
  )
}

export default Error