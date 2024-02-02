import React, { memo } from 'react'

const Callback = ({fun, minus}) => {
    console.log("Running");
    
  return (
    <>
        {minus}
    </>
  )
}

export default memo(Callback)




// The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a
//  memoized function