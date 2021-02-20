# React Shimmer

A React built shimmer, this can be use for image, text or entire section

# Usage
```
const Example = (props) => {
  const isLoading = props.loading // your async data/image  loading state
  return(
    <div>
      {isLoading ? (<ReactShimmer />) : (<img src="" />)}
      {isLoading ? (<ReactShimmer />) : (<p>You text</p>)}
      <ReactShimmer />
    </div>
  )
}
```

# Options

| Property | Data Types | Defaul Valus
| ------ | ------ | ------
| wrapperStyle | Object | {}
| width | Number | 400
| height | Number | 400
| duration | Number | 1600
| cssClass | String | "


# Approach

This approach is better than wrap any component or image element by this component, by doing this we can create own shimmer by minimal configuration, and its scalabale to your any UI component, so that if you know how is your UI is to be after loading state, we can create exact copy in Shimmer
