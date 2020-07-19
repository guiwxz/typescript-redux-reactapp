/**
 *  Action types
 */
 export enum RepositoriesTypes {
     LOAD_REQUEST = '@repositories/LOAD_REQUEST', // funcao/action que o componente vai disparar pra chamar a api
     LOAD_SUCCESS = '@repositories/LOAD_SUCCESS',       // vai ser ouvido pelo redux saga que vai fazer a chamada na api
     LOAD_FAILURE = '@repositories/LOAD_FAILURE',
 }      // depois chama o sucess ou failure dependendo doq aconteceu


/**
 * Data types : vai dizer qual o formato da informação dentro do reducer
*/
export interface Repository {
    id: number
    name: String
}

/**
 * State type : como vai ser o formato do estado que vai ter no reducer
 */
export interface RepositoriesState { 
    readonly data: Repository[]
    readonly loading: boolean
    readonly error: boolean
} // readonly é pra n poder ser alterado a informacao