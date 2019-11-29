import { IRoute } from "./models/IRoute";
import { AppHelper } from "./utils/appHelper";

const routes: IRoute[] = [
        { path: "/init", method: "get", func: "init" },
        { path: "/ipfs", method: "post", func: "ipfsStore" },
        { path: "/ipfs", method: "get", func: "ipfsRetrieve" }
    ];

AppHelper.build(routes);
