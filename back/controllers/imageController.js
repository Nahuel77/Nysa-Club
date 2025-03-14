export const getImages = async (req, res) => {
    //agregar llave de api de google y id de carpeta 
    //tambien en este punto ver si seria mas util llamar las imagenes en el front.
    try {
        const res = await fetch(//
            `https://www.googleapis.com/drive/v3/files?q='${FOLDER_ID}'+in+parents&key=${API_KEY}&fields=files(id,name,mimeType)`
        );
        const data = await res.json();

        const images = data.files
            .filter(file => file.mimeType.startsWith("image/"))
            .map(file => ({
                id: file.id,
                name: file.name,
                url: `https://drive.google.com/uc?export=view&id=${file.id}`
            }));

        return NextResponse.json(images);
    } catch (error) {
        return NextResponse.json({ error: "Error al obtener imágenes" }, { status: 500 });
    }
}