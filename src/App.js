import "./App.css";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <table>
        <tr>
          <td>
            <ProfilePhoto />
          </td>
          <td>
            <table>
              <tr>
                <td>
                  <FullName />
                </td>
              </tr>
              <tr>
                <td>
                  <Address />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </React.Fragment>
  );
}

export default App;
