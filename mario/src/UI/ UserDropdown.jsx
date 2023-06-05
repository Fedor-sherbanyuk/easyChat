import {Dropdown} from "react-bootstrap";
import * as profiles from "react-bootstrap/ElementChildren";

const UserDropdown = ({ selectedProfile, setSelectedProfile }) => {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                {selectedProfile.name}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {profiles.map((profile) => (
                    <Dropdown.Item
                        key={profile.id}
                        onClick={() => setSelectedProfile(profile)}
                    >
                        {profile.name}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};
export default UserDropdown;
