import React from 'react';

const Tree = (props) => {
  const styles = {
    children: {
      marginLeft: "20px",
    }
  }
  const jsx = (tree) => {
    return tree.map(o => {
      
      if (o.contacts) {
        
        return (
          <div key={o.id} onClick={(e)=>{
            e.stopPropagation();props.handleToggle(o.id)}}>
            <div>{o.name}</div>
            {o.show && <div style={styles.children}>{jsx(o.contacts)}</div>}
          </div>
        )
      } else {
        return <div key={o.id} onClick={(e)=>{
          e.stopPropagation();props.handleToggle(o.id)}}>{o.name}</div>
      }
    })
  }


  return (
    <div className="col-12 text-left">
      <h1>Contanct Tree</h1>
      {jsx(props.data)}
    </div>
  );

}

export default Tree;
