import { useContent } from "../hooks"
export default function Browse() {

    //TODO: Series and Films
    //TODO: Slides
    // pass it to the browse container
    const { series } = useContent('series');
    console.log(series);

    return (
        <p>
            Hello from the browse
        </p>
    )
}
