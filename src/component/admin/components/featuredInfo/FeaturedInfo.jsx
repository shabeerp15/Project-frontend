import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import "./featuredInfo.css"

function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1200</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Comapred to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">4800</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Comapred to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">1200</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Comapred to last month</span>
            </div>
        </div>
    )
}

export default FeaturedInfo
