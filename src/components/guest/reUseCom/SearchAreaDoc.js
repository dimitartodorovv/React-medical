
function SearchAreaDoc(props) {
    return (
        <>
            <form >
                <select onChange={(e) => { props.handleChoiceSpecialty(e) }} className="select-sector" name="doctors" >
                    <option value="" defaultValue="selected">Choose a specialty</option>
                    <option value="pediatrics">Pediatrics</option>
                    <option value="orthopedics">Orthopedics</option>
                    <option value="neonatology">Neonatology</option>
                    <option value="neurology">Neurology</option>
                    <option value="urology">Urology</option>
                    <option value="surgery">Surgery</option>
                    <option value="ophthalmology">Ophthalmology</option>
                    <option value="hematology">Hematology</option>
                    <option value="endocrinology">Endocrinology</option>
                </select>
            </form>
            <form >
                <select onChange={(e) => { props.handleChoiceCity(e) }} className="select-sector" name="town" >
                    <option value="" defaultValue="selected">Select a location</option>
                    <option value="sofia">Sofia</option>
                    <option value="plovdiv">Plovdiv</option>
                    <option value="pleven">Pleven</option>
                    <option value="varna">Varna</option>
                    <option value="stara zagora">Stara Zagora</option>
                    <option value="veliko turnovo">Veliko Turnovo</option>

                </select>
            </form>
        </>
    );
}

export default SearchAreaDoc;