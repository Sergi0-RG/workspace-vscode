package java;

class participantes_old {
    // atribs
    private String nombre;
    private String apellidos;
    private int edad;
    private String direccion;
    private String telefono;
    //constructs

    public participantes_old() {

    }

    public String getNombre() {
        return nombre;
    }

    public participantes_old(String nombre, String apellidos, int edad, String direccion, String telefono) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getTelefono() {
        return telefono;
    }

    public void setTelefono(String telefono) {
        this.telefono = telefono;
    }

    @Override

    public String toString() {
        return "participantes_old [nombre=" + nombre + ", apellidos=" + apellidos + ", edad=" + edad + ", direccion="
            + direccion + ", telefono=" + telefono + "]";
    }


}