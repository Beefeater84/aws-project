import {Button} from "@aws-amplify/ui-react";

import { get } from 'aws-amplify/api';
import handleSignOut from "../../shared/utilities/sign-out";

export default function BlueTeamIndex() {

    const getDataHandler = async () => {
        try {
            const restOperation = get({
                apiName: 'apiawstest',
                path: '/get-file-csv'
            });
            const response = await restOperation.response;
            console.log('GET call succeeded: ', await response.body.json())
        } catch (error) {
            console.log('GET call failed: ', error);
        }
    }

    const getTextHandler = async () => {
        try {
            const restOperation = get({
                apiName: 'apiawstest',
                path: '/get-file-csv'
            });
            const response = await restOperation.response;
            console.log('GET call succeeded: ', await response.body.json())
        } catch (error) {
            console.log('GET call failed: ', error);
        }
    }


    return (
        <section className="container">
            <header>
                <Button onClick={handleSignOut}>
                    Sign Out
                </Button>
            </header>
            <div>
                <h1>Blue Team</h1>
                <div>
                    <Button
                        loadingText=""
                        onClick={getDataHandler}
                    >
                        Get data!
                    </Button>

                    <Button
                        loadingText=""
                        onClick={getTextHandler}
                    >
                        Get text
                    </Button>
                </div>
            </div>


        </section>
    )
}