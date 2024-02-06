import sector from "../../db"

const Option = (props) => {
    const { sector, lenguage } = props;

    const renderFrameworks = () => {
        if (lenguage && sector[lenguage] && sector[lenguage].Lenguage) {
            const frameworks = sector[lenguage].Lenguage;
            
            return Object.keys(frameworks).map((lenguage) => (
                <div key={lenguage}>
                    <label>{lenguage}</label>
                    <select name="framework">
                        {frameworks[lenguage].map((framework) => (
                            <option key={framework} value={framework}>{framework}</option>
                        ))}
                    </select>
                </div>
            ));
        }

        return null;
    };

    return (
        <div>
            {renderFrameworks()}
        </div>
    );
};

export default Option;