import ApolloClient, { createNetworkInterface} from 'react-apollo'

const createNetworkInterface = createNetworkInterface({
    uri: 'http://localhost:1337/graphql'
})
const client = new ApolloClient({networkInterface})

eport default client