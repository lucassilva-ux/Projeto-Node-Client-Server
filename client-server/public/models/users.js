/**
 * Representa um usuário do sistema.
 *
 * A classe mantém os dados informados nos formulários e padroniza o formato
 * usado pelo controlador, pela tabela e pelo localStorage.
 */
class User {

    static get DEFAULT_PHOTO() {
        return 'dist/img/boxed-bg.jpg';
    }

    /**
     * Cria uma nova instância de usuário.
     
      @param {string} name Nome completo.
      @param {string} gender Gênero informado no formulário.
      @param {string} birth Data de nascimento.
      @param {string} country País.
      @param {string} email E-mail de acesso/contato.
      @param {string} password Senha informada.
      @param {string} photo Foto do usuário em Base64 ou caminho de imagem.
      @param {boolean} admin Indica se o usuário é administrador.
     */
    constructor (name, gender, birth, country, email, password, photo, admin){

        this._id;
        this._name = name;
        this._gender = gender;
        this._birth = birth;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo || User.DEFAULT_PHOTO;
        this._admin = admin;
        this._register = new Date();

    }

    get id() {
        return this._id;
    }

    get register() {
        return this._register;
    }

    get name() {
        return this._name;
    }

    get gender() {
        return this._gender;
    }

    get country() {
        return this._country;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }

    get photo() {
        return this._photo;
    }

    get admin() {
        return this._admin;
    }

    set photo(value) {
        this._photo = value;
    }

    /**
     * Carrega dados vindos de um objeto JSON para a instância atual.
     
     Usado principalmente ao recuperar registros do localStorage, convertendo
     novamente o campo de cadastro para Date quando necessário.
      
      @param {Object} json Objeto com os dados do usuário.
     */
    loadFromJSON(json) {

        json = json || {};

        if (!json._photo && json.photo) json._photo = json.photo;
        if (!json._name && json.name) json._name = json.name;
        if (!json._email && json.email) json._email = json.email;
        if (!json._password && json.password) json._password = json.password;
        if (json._admin === undefined && json.admin !== undefined) json._admin = json.admin;
        if (!json._register && json.register) json._register = json.register;

        for (let name in json) {

            switch(name) {
                case '_register':
                    this[name] = new Date(json[name])
                break;
                default:
                    if (name.substring(0, 1)==='_') this[name] = json[name];

            }

        }

        if (!this._photo) this._photo = User.DEFAULT_PHOTO;
        if (!this._register) this._register = new Date();

    }

    /**
     * Recupera todos os usuários gravados no localStorage.
     
     @returns {Array<Object>} Lista de usuários armazenados.
     */

   static getUsersStorage() {
        return fetch('/users')
            .then(response => response.json());
    }

    toJSON(){
        let json = {};

        Object.keys(this).forEach(key =>{

            if (this[key] !== undefined) json[key] = this[key]

        });

        return json;

    }

    /**
     * Salva o usuário atual no localStorage.
     *
     * Quando o usuário já possui ID, atualiza o registro existente. Caso
     * contrário, gera um novo ID e adiciona o usuário na lista armazenada.
     */
    save() {

        return new Promise((resolve, reject)=>{
            
        let promise;

        if (this.id){
        promise = HttpRequest.put(`/users/${this.id}`, this.toJSON());

       }else {
        promise = HttpRequest.post(`/users`, this.toJSON());

       }

       promise.then(data =>{
            this.loadFromJSON(data);

            resolve(this);

            }).catch(e=>{
                reject(e);

            });


        });

    }

    /**
     * Remove o usuário atual do localStorage usando seu ID.
     */
    remove() {

        return HttpRequest.delete(`/users/${this.id}`);

    }

}
