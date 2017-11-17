<template>
    <div>
        <div class="agreement_head">
            <span @click="$router.go(-1)" class="back"><img style=" width:0.655rem;height: 1.065rem;display: inline-block;" src="./assets/back.png" alt=""></span>
            <span>借款协议</span>
        </div>

        <div class="main">
            <div class="loan_num">编号：{{info.orderId}}</div>
            <div class="main_content">
                <div class="con_item" style="margin-top: 0;">
                    <div>
                        <p class="first_con">甲方（借款人）：{{info.userName}}</p>
                        <p class="first_con">身份证号码：************{{info.userId}}</p>
                        <p class="first_con">乙方（出借人）：乙方（出借人）相关明细详见本协议后附表。</p>
                       <p class="first_con">丙方（居间方）：{{info.intermediary_side_A}} </p>
                       <p class="first_con">丁方（居间方）：{{info.intermediary_side_B}}</p>
                    </div>
                </div>
                <div class="con_item">
                    <table border="1" cellspacing="0" cellpadding="0" style="text-align: center;">
                        <tr>
                            <th colspan="4">借款明细</th>
                        </tr>
                        <tr>
                            <td>本金金额</td>
                            <td colspan="3">人民币 {{info.loanAmount}}元</td>
                        </tr>
                        <tr>
                            <td>大写</td>
                            <td colspan="3">人民币 {{amount_daxie}}</td>
                        </tr>
                        <tr>
                            <td>借款用途</td>
                            <td>个人消费</td>
                            <td>年化利率</td>
                            <td>{{info.annual_interest_rate}}</td>
                        </tr>
                        <tr>
                            <td>借款起息日</td>
                            <td>{{info.loan_interest_date}}</td>
                            <td>借款到期日</td>
                            <td>{{info.loan_due_date}}</td>
                        </tr>
                        <tr>
                            <td>还款方式</td>
                            <td colspan="3">一次性还本付息</td>
                        </tr>
                        <tr>
                            <td>还款期数</td>
                            <td colspan="3">{{info.loanPeriod}}期</td>
                        </tr>
                    </table>
                    <p class="first_con" style="margin: 10px 0;">丙方平台收集的借款人甲方，通过丁方运营的融资平台向出借人乙方借款，出借人乙方亦同意出借款项，现经各方协商一致，达成如下条款：</p>
                    <table border="1" cellspacing="0" cellpadding="0" style="text-align: center;width: 100%;">
                        <thead>
                            <tr>
                                <th colspan="2">借款人还款计划</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>期数</td>
                                <td>{{info.loanPeriod}}期</td>
                            </tr>
                            <tr>
                                <td>还款日</td>
                                <td>{{info.repayDate}}</td>
                            </tr>
                            <tr>
                                <td>还款金额</td>
                                <td>{{info.shouldPay}}元</td>
                            </tr>
                            <tr>
                                <td>本金</td>
                                <td>{{info.loanAmount}}元</td>
                            </tr>
                            <tr>
                                <td>利息</td>
                                <td>0.05%/日</td>
                            </tr>
                            <tr>
                                <td>信用认证费</td>
                                <td>20元/笔</td>
                            </tr>
                            <tr>
                                <td>居间服务费</td>
                                <td>{{info.serviceFee}}</td>
                                <!-- <p>500元/7天：13.25元</p>
                                    <p>500元/14天：46.5元</p>
                                    <p>1000元/7天：46.5元</p>
                                    <p>1000元/14天：113元</p>-->
                            </tr>
                        </tbody>
                    </table>

                </div>
                <div class="con_item">
                    <div class="first_head">释义</div>
                    <div>
                        <p class="first_con">1、	《借款协议》是指本协议（以下简称“借款协议”或“本协议”，其全部内容由甲、乙双方在线以类似点击确认方式视为认可并签署，幷严格受其约束行使权利、履行义务。</p>
                        <p class="first_con">2、	借款人（“甲方”）是指《借款协议》中列明的符合中华人民共和国法律规定的具有完全民事权利能力和民事行为能力，（非高等院校全日制学生），独立行使和承担本协议项下权利义务的个体。甲方为丙方平台上的注册用户，有借款需求。</p>
                        <p class="first_con">3、	出借人（“乙方”）是指《借款协议》中列明的符合中华人民共和国法律规定的具有完全民事权利能力和民事行为能力，独立行使和承担本协议项下权利义务的个体。乙方为丁方平台上的注册用户，愿意出借合法取得的自有资金。</p>
                        <p class="first_con">4、居间方丙方（“丙方”）是指《借款协议》中列明的浙江数氪金融信息服务有限公司（以下简称“数氪金服”），其是一家提供互联网大数据风控的科技型企业，为出借人与借款人提供技术支持与结果分析，对借款人的资格条件、信息的真实性、合法性进行必要审核，给出出借款申请是否通过的建议，为甲方提供信息服务、媒介服务、合同管理、贷后管理等平台服务，并与甲方签订《平台服务协议》，丙方有权收取综合服务费。丙方的综合服务费由丙丁双方根据约定，由丁方向甲方代收并支付给丙方。</p>
                        <p class="first_con">5、 居间方丁方（“丁方”）是指《借款协议》中列明的**订单生成后可见**，其是一家在杭州市合法成立并有效存续的有限责任公司，为甲、乙双方的借款提供信息服务、合同管理等服务，丁方有权收取综合服务费。</p>
                        <p class="first_con">6、	甲方账户是指甲方在银行/第三方支付机构开立的用以接受借款，支付还款的相关账户。</p>
                        <p class="first_con">7、	乙方账户是指乙方在银行/第三方支付机构开立的用以提供的发放借款，收取还款的相关账户。</p>
                        <p class="first_con">8、	本协议项下甲方、乙方、丙方、丁方单独称"一方”，任意两方合称"双方”，任意三方合称“三方”，任意四方合称“各方”。</p>
                        <p class="first_con">9、	工作日是指除国家法定节假日、公休日以外的丙方、丁方对外办理业务的任何一日。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第一条 借款</div>
                    <div>
                        <p class="first_con">1、	借款标的各项相关内容以《借款明细》中列明的内容为准，甲方委托并授权乙方于借款起息日，将甲方应向丙方、丁方交付的相关款项，代甲方使用出借资金预先缴纳，或不撤销地授权丙方或丁方指定的第三方支付机构从甲方账户划扣。具体计算方式以甲方与丙方签订的《平台服务协议》为准。</p>
                        <p class="first_con">2、	借款期限是指《借款明细》中列明的合同生效日起至合同到期日（最后一期还款日）之间的期间。</p>
                        <p class="first_con">3、	起息日是指乙方的出借资金到达借款人账户开始计算利息的日期。</p>
                        <p class="first_con">4、	还款日是指本协议约定的借款到期日，实际的还款日以甲方还款到达乙方账户之日为准。</p>
                        <p class="first_con">5、	乙方按照丁方平台的规则，对平台发布的投资计划类似点击“立即投资”安钮时，即视为乙方接受丙方平台收集的借款人甲方的借款申请，乙方阅知并同意本协议（以电子形式生成），并向丁方发出不可撤销的授权指令，授权丁方委托其指定的第三方支付机构从乙方账户划扣本协议约定的出借资金。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">四、用户承诺</div>
                    <div>
                        <p class="first_con">4.1 用户应当妥善保管本人的平台账号、密码、绑定的手机号码、手机验证码等信息。上述信息是您在本平台的唯一身份识别信息。您应妥善保管并正确使用与账户有关的一切信息。对于非因平台过错产生的上述信息泄露，您应及时通知本平台，以减少可能但不限于下列后果：</p>
                        <p class="second_con">(1) 用户的不良信用信息将被上传至经中国人民银行批准并依法设立的各征信数据机构；</p>
                        <p class="second_con">(2) 用户将因违约行为承担相应的违约责任；</p>
                        <p class="second_con">(3) 用户将因违约行为承担相应的诉讼后果。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第二条 正常还款</div>
                    <div>
                        <p class="first_con">1、还款方式以“借款明细”中列明的方式为准，甲方须在还款日当日18:00前支付相当于"借款人还款计划"中列明的“还款金额”的款项至甲方还款账户。</p>
                        <p class="first_con">2、	甲方应通过协议约定的还款方式进行还款操作，按时足额将还款金额支付至甲方还款账户，由于账户余额不足、账户原因、甲方操作失误等原因导致划款失败的由甲方承担相应责任。</p>
                        <p class="first_con">3、	甲方不可撤销地授权丙方、丁方委托的银行/第三方支付机构有代收代扣本协议下还款相关款项的权利，从甲方还款账户中划扣甲方应还款项（如甲方逾期还款，应还款项包括逾期费用），银行/第三方支付机构在成功划转还款至乙方账户后视作甲方还款成功，由于账户余额不足、账户原因、甲方操作失误等原因导致划款失败的由甲方承担相应责任。</p>
                        <p class="first_con">4、	乙方不可撤销地授权丙方、丁方委托的合作银行/第三方支付机构有代收代扣本协议下还款相关款项的权利，将还款本息支付至乙方帐户。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第三条 逾期还款</div>
                    <div>
                        <p class="first_con">1、	甲方未能在任何一个还款日18:00前足额支付还款金额至甲方还款账户的，视作逾期还款。</p>
                        <p class="first_con">2、	甲方逾期还款的，自还款日后第一日起，应向丙方承担违约责任造成的损失及丙方因维护本协议下债权债务关系依约履行而产生的相关合理费用，具体以甲方与丙方签订的《平台服务协议》为准。</p>
                        <p class="first_con">3、	甲方逾期还款的，履行还款义务的顺序为：逾期违约金与守约方的损失及维权费用、综合服务费、利息、本金。</p>
                        <p class="first_con">4、	甲方逾期还款的，乙方有权将债权转让给适格第三方。</p>
                        <p class="first_con">5、	甲方发生逾期超过3日，甲方个人信息将可能进入信用征信系统，由此产生的后果由甲方承担。</p>
                        <p class="first_con">6、	甲方发生逾期情形的，乙方在此不可撤销的授权丙方以丙方名义进行催告，并授权丙方可转授权绐丙方的合作方催告，催告方式包括但不限于：发送网站、APP推送通知，发送短信，发送函件、电话催告，提起诉讼/仲裁等。</p>
                        <p class="first_con">7、（1）逾期责任：以逾期未还金额为基数按日收取，按照逾期未还金额计算，包括逾期未还本金、利息之和，但借款人仍应承担因借款人违约逾期还款，债权人诉诸维权的费用，包括但不限于：</p>
                        <p class="second_con">(1) 因债权转让发生的税费；</p>
                        <p class="second_con">(2) 诉讼、仲裁过程中支出的费用，包括法院、仲裁机构收取的费用等；</p>
                        <p class="second_con">(3) 审计费、拍卖费、律师费等中介费用；</p>
                        <p class="second_con">(4) 包括但不限于交通费、餐费等必要差旅费用。</p>
                        <p class="first_con">（2）贷后管理服务费标准：</p>
                        <p class="second_con">逾期 1～14天（含14天）  &nbsp;&nbsp;&nbsp;贷后管理服务费／日=0.5% * 剩余本金</p>
                        <p class="second_con">逾期15～60天（含60天） &nbsp;&nbsp;&nbsp;贷后管理服务费／日=0.75% * 剩余本金</p>
                        <p class="second_con">逾期>60天               &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; 贷后管理服务费／日=0.85% * 剩余本金</p>
                        <p class="first_con">（3）如借款人到期未还触发逾期，除承担逾期日贷后管理服务费之外，还应在逾期首日24点前按照该时间未偿还的剩余本金*1%的标准向现金斗士一次性缴纳平台维护费。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第四条 提前结清</div>
                    <div>
                        <p class="first_con">1、	甲方可以在丙方平台发起提前结清服务申请，服务是否可用以操作界面展示为准（受银行结算等原因影响，可能无法发起申请）。</p>
                        <p class="first_con">2、	甲方选择提前结清的：甲方仍应按《借款协议》偿还事先约定的到期全额款项（包括综合服务费、利息、本金）。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第五条 债权、债务转让</div>
                    <div>
                        <p class="first_con">1、	未经乙方或乙方委托丙方、丁方事先书面（包括但不限于电子邮件等方式）同意，甲方不得将本协议项下的任何权利义务转让给任何第三方。</p>
                        <p class="first_con">2、	乙方可通过签订《债权转让协议》向第三方转让本协议项下权利义务，转让后甲方即向新的债权人履行本协议项下全部义务，乙方不再享有任何与债权相关的权利。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第六条 费用</div>
                    <div>
                        <p class="first_con">甲方、乙方、丁方已充分知晓丙方提供本协议所约定的服务，就该服务向甲方收取的综合服务费，幷由甲方与丙方签署 《平台服务协议》加以确认。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第七条 承诺与保证</div>
                    <div>
                        <p class="first_con">1、	甲方及乙方各自在此确认为具有完全民事权利能力和完全民事行为能力的主体，有权签订并履行本协议。</p>
                        <p class="first_con">2、	乙方保证其所用于出借的资金来源合法，且乙方是该资金的合法支配权人，如第三方对资金归属、支配权、合法性等问题主张异议，给他方造成的损失的，应当赔偿损失。</p>
                        <p class="first_con">3、	甲方、乙方应及时并如实向对方及丙方、丁方及指定的其他第三方（银行/第三方支付机构等）提供个体信息（包括但不限于姓名、身份证号、企业或组织名称、统一社会信用代码、联系 方式、联系地址、职业信息、联系人信息等）以及借款用途等相关信息。</p>
                        <p class="first_con">4、	甲方、乙方承诺并保证向其他各方提供的所有本人信息均真实、完整、有效、及时。因上述任何本人信息及资料的变更、修改、停用等，至少提前2个工作日通知其他各方。</p>
                        <p class="first_con">5、 如甲方或乙方变更账户信息（账户名称、账号等）、通讯地址的，应当至少在款项交付日前2个工作日通知丙方和丁方。如甲方或乙方因未能遵守上述承诺而导致自身损失，自行承担，导致丙方、丁方损失的，承担赔偿责任。</p>
                        <p class="first_con">6、甲方承诺如发生任何影响或者可能影响甲方经济状況、信用状况、还款能力的事由，包括但不限于甲方的工作单位、职位、工作地点、薪酬等事项的变化，甲方应于前述变更发生之日起2个工作日内通知丙方。</p>
                        <p class="first_con">7、	甲方承诺根据本协议列明的借款用途使用借款资金，并保证不挪用借款资金或将借款资金用于以下目的和用途：</p>
                        <p class="second_con">(1) 以任何形式进入证券市场，或用于股本权益性投资；</p>
                        <p class="second_con">(2) 用于房地产项目开发；</p>
                        <p class="second_con">(3) 用于赌博；</p>
                        <p class="second_con">(4) 用于国家法律法规明令禁止或限制的各项其他活动。</p>
                        <p class="first_con">8、	各方承诺，各方不会利用丙方、丁方平台进行信用卡套现、洗钱、非法集资或其他不正当交易行为，否则应依法独立承担法律责任。</p>
                        <p class="first_con">9、	各方确认，甲方和乙方授权和委托丙方、丁方根据本协议所采取的全部行动和措施的法律后果均归属于甲方和乙方本人； 在任何情形下，丙方、丁方不是本协议项下任何借款或债务的债务人或需要以其自有资金偿还本协议项下的任何借款或债务。</p>
                        <p class="first_con">10、甲方、乙方无法正常使用本协议项下，丙方、丁方或其合作方提供的服务时，有权追究责任，但因下列事项的，应免除责任：</p>
                        <p class="second_con">(1) 系统维护、故障、黑客攻击、电信部门技术调整或故障、网站升级；</p>
                        <p class="second_con">(2) 银行、第三方支付平台或金融相关等部门的意外事件；</p>
                        <p class="second_con">(3) 法律法规及政策调整；</p>
                        <p class="second_con">(4) 不可抗力</p>
                        <p class="first_con">11、各方知晓幷认可丙方、丁方与银行、第三方支付机构的合作，确认并同意因资金在途或划转延迟等可能产生的收益归入丙方的居间酬劳。</p>
                    </div>

                </div>
                <div class="con_item">
                    <div class="first_head">第八条 违约</div>
                    <div>
                        <p class="first_con">1、	发生下列任何一项或几项情形的，视为甲方违约：</p>
                        <p class="second_con">(1) 甲方违反其在本协议所做的任何承诺和保证的；</p>
                        <p class="second_con">(2) 甲方的任何财产遭受没收、征用、查封、扣押、冻结等可能影响其履约能力的不利事件，且不能及时提供有效补救措施的；</p>
                        <p class="second_con">(3) 甲方的财务状况出现影响其履约能力的不利变化，且不能及时提供有效补救措施的。</p>
                        <p class="first_con">2、	若甲方违约或内方合埋判断甲方能发生违约事件的，乙方及/或乙方的债权受让人（或授权丁方）有权采取下列任何一项 或几项救济措施：</p>
                        <p class="second_con">立即暂缓、取消发放全部或部分借款；</p>
                        <p class="second_con">宣告已发放借款全部提前到期，甲方应立即偿还所有应付款项；</p>
                        <p class="second_con">解除本协议；</p>
                        <p class="second_con">采取法律、法规以及本协议约定的其他救济措施。</p>
                        <p class="first_con">3、	乙方的债权受让方向乙方支付相关款项后，乙方、丁方应积极协助乙方的债权受让方向甲方追偿（包括但不限于签署、提供相应书面材料等），若因乙方原因导致债权受让方不能追偿的，乙方应向债权受让方承担赔偿责任或返还偿付款项。</p>
                    </div>

                </div>
                <div class="con_item">
                    <div class="first_head">第九条 证据和计算</div>
                    <div>
                        <p class="first_con">1、本协议各方确认并同意，由丙方对本协议项下所涉的任何金额进行计算；丙方可通过其自身、合作方及合作的银行/第三方支付机构提供的电子数据信息进行计算、统计，对法院需要认定的必要费用提供财务凭证。在无明显错误的情况下，上述针对本协议项下任何金额的任何证明或确定，应作为该金额有关事项的终局证明。</p>
                        <p class="first_con">2、甲乙双方委托丙方、丁方对相关金额进行计算，并在丙方、丁方平台发布或更新具体信息。上述还款明细中列明的每月还款本息金额若与发布或更新的还款明细不一致的，以平台上发布或更新的还款明细为准。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第十条 保密条款</div>
                    <div>
                        <p class="first_con">1、	各方应将其在本协议及其附属合同、文件的签订和履行过程中取得的有关内容以及与此等内容有关的任何文件、资料或信息视为保密信息（以下简称"保密信息"）。</p>
                        <p class="first_con">2、	任意一方向其他各方承诺，其不会使用或向非本协议方披露保密信息，除非事先得到其他三方的书面同意。</p>
                        <p class="first_con">3、	下述信息不适用于保密信息的披露：</p>
                        <p class="second_con">该等信息已为公众所知；</p>
                        <p class="second_con">任何适用法律要求披露的、或者有权的司法机关、政府、机关、监管机关要求披露的、或者法院裁定要求披露的信息；</p>
                        <p class="second_con">相关方在正当履行本合同时披露的或随本合同而相应披露的信息；</p>
                        <p class="second_con">相关方从第三方获得的且无须承担保密义务的信息。</p>
                        <p class="first_con">但是上述第（3）项或第（4）项信息的披露必须基于接收方对上述信息保密并且接收方仅可为披露之目的使用上述信息。</p>
                        <p class="first_con">4、	保密信息应绝对保密，未经本协议各方以书面方式一致同意，任何一方不得向除政府审批机构、顾问（包括律师、会计师、评估师和其他专业顾问）、为本合同的交易提供服务的机人披露本合同任何条款。</p>
                        <p class="first_con">5、	本协议项下的任何一方应采取所有其他必要、适当的措施，以确保保密信息的保密性。</p>
                        <p class="first_con">6、	不论本协议是否有效或者是否履行完毕，本条中规定的保密义务不因此受到任何影响。</p>
                        <p class="first_con">7、	保密条款在本协议合法解除、终止或履行完毕后继续有效。</p>
                    </div>

                </div>
                <div class="con_item">
                    <div class="first_head">第十一条 知识产权</div>
                    <div>
                        <p class="first_con">1、	丙方、丁方及关联公司所有系统、提供的服务、本协议所有内容，包括但不限于产品名、商标、网站名、网站架构、网站画面、网站设计、著作、图片、档案等无形资产（包括但不限于商标权、专利权、著作权、商业秘密等）均由丙方、丁方或关联公司所有。</p>
                        <p class="first_con">2、	非经丙方、丁方或关联企业书面同意，任何人不得擅自使用、修改、反向工程、反汇编、反编译、复制、公开传播、散布、发行或公开发表丙方、丁方程序或内容。</p>
                        <p class="first_con">3、	尊重知识产权是甲方、乙方应尽的义务，任何人侵犯了丙方、丁方和/或关联公司的知识产权，应当承担损害赔偿责任，被侵害方拥有追究责任的权利。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第十二条 通知</div>
                    <div>
                        <p class="first_con">1、本协议任何一方根据本协议约定做出的通知和/或文件均应以书面形式做出（不包括本协议第七条因贷后管理服务所涉内容），可由专人送达、挂号邮递、特快专递或通过丙方网络平台发布等方式传送，具体送达信息以本协议约定或各方在丙方、丁方平台的注册信息或登记信息为准。</p>
                        <p class="first_con">2、通知在下列日期视为送达：</p>
                        <p class="second_con">短信、邮件发出即视为送达，专人递送的通知，在专人 递送之交付3为有效送达；</p>
                        <p class="second_con">以挂号信（付清邮资）发出的通知，在寄出（以邮戳为凭）后的五（5）个工作日内为有效送达；</p>
                        <p class="second_con">以特快专递（付清邮资）发出的通知，在寄出〔以邮戳为凭〕后的三个（3）工作日内为有效送达；</p>
                        <p class="second_con">通过丙方网络平台发布的方式通知的，在丙方网络平台发布之日为有效送达。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第十三条 法律适用和管辖</div>
                    <div>
                        <p class="first_con">如果各方在本协议履行过程中发生争议，由杭州市余杭区人民法院管辖，因诉讼产生的诉讼费、律师代理费等相关费用由败诉方承担。</p>
                    </div>
                </div>
                <div class="con_item">
                    <div class="first_head">第十四条 其他</div>
                    <div>
                        <p class="first_con">1、	甲方希望通过丙方、丁方运营平台向乙方借款，乙方亦同意借款。各方协商一致，达成本协议。</p>
                        <p class="first_con">2、	本协议自出借资金到达甲方账户幷开始计息之日起生效。</p>
                        <p class="first_con">3、	本协议中部分条款根据相关法律法规等的规定成为无效，或部分无效时，该等无效不影响本协议项下其他条款的效力，各方仍应履行其在本协议项下的义务。</p>
                        <p class="first_con">4、	本协议项下的附件和补充协议构成本协议不可分割的一部分。</p>
                        <p class="first_con">5、	本协议各方委托丙方、丁方保管所有与本协议有关的书面文件或电子信息；本协议各方确认并同意由丙方、丁方提供的与本协议有关的书面文件或电子信息在无明显错误的情况下应作为本协议有关事项的终局证明。</p>
                        <p class="first_con" style="margin-top:15px ">（以下无正文）</p>
                    </div>
                </div>
                <div class="con_item" style="margin-top: 15px">
                    <div>
                        <p class="first_con">甲方（借款人）：{{info.userName}}</p>
                        <p class="first_con">乙方（出借人）</p>
                        <table border="1" cellspacing="0" cellpadding="0" style="text-align: center;width: 100%;margin: 5px 0;">
                            <tr>
                                <th>姓名</th>
                                <th>身份证号码</th>
                                <th>借款本金</th>
                            </tr>
                            <tr style="height: 26px;">
                                <td></td>
                                <td></td>
                                <td>{{info.loanAmount}}元</td>
                            </tr>
                        </table>
                        <p class="first_con">丙方（居间方）：{{info.intermediary_side_A}}</p>
                        <p class="first_con">丁方（居间方）：{{info.intermediary_side_B}}</p>
                        <p class="date fr">{{info.loan_interest_date}}</p>
                    </div>
                </div>
            </div>
        </div>



    </div>
</template>

<script>

    import Lib from 'assets/js/Lib';
    export default {
        name: 'add',
        components: {

        },
        data () {
            return {
                name:'',
                id:'',
                amount:'',
                date:'',
                localUserInfo:{},
                info:{}
            }
        },
        mounted(){

            let d = new Date();
            this.date = d.getFullYear()+ '年' +
                        (d.getMonth()+1) + '月' + 
                        d.getDate() + '日'

            this.getLoanInfo();
        },
        computed:{
            amount_daxie(){
                /*return this.DX(this.$route.query.amount)*/
                return this.DX(this.info.loanAmount)
            }

        },
        methods: {
            DX(n) {
                if (!/^(0|[1-9]\d*)(\.\d+)?$/.test(n))
                    return "数据非法";
                var unit = "千百拾亿千百拾万千百拾元角分", str = "";
                    n += "00";
                var p = n.indexOf('.');
                if (p >= 0)
                    n = n.substring(0, p) + n.substr(p+1, 2);
                    unit = unit.substr(unit.length - n.length);
                for (var i=0; i < n.length; i++)
                    str += '零壹贰叁肆伍陆柒捌玖'.charAt(n.charAt(i)) + unit.charAt(i);
                return str.replace(/零(千|百|拾|角)/g, "零").replace(/(零)+/g, "零").replace(/零(万|亿|元)/g, "$1").replace(/(亿)万|壹(拾)/g, "$1$2").replace(/^元零?|零分/g, "").replace(/元$/g, "元整");
            },
            getLoanInfo(){
                console.log(this.$route.query.orderId)
                var self = this;
                Lib.M.ajax({
                    type:'get',
                    url:'cash-account/loan/getLoanOrderInfo/'+this.$route.query.orderId,
                    success:function(res){
                        console.log(res)
                        self.info = res.data;
                    }
                })
            },
        }
    }
</script>

<style>
    .fr{
        float: right;
    }

    .agreement_head{
        height:3rem;
        background:rgba(255,255,255,1);
        text-align: center;
        line-height: 3rem;
        font-size:1.065rem;
        color: rgba(0,0,0,1);
        position: relative;
    }
    .agreement_head span:nth-of-type(1){
        position: absolute;
        left: 1.47rem;
    }
    .main{
        background:rgba(255,255,255,1);
        margin-top: 2px;
        overflow: hidden;
        font-size:0.815rem;
        font-family:PingFangSC-Thin;
        color:rgba(26,26,26,1);
        line-height: 24px;
        padding:10px;
    }
    .main .loan_num{
        text-align: right;
        font-weight: 700;
    }
    .main_head{
        width:20.97rem;
        line-height:1.405rem;
        text-indent: 2rem;
        margin: 0rem auto;
    }
    .main_content{
        width:20.97rem;
        margin:0 auto;

    }
    .first_head{
        height:0.815rem;
        line-height:1.405rem;
        margin-bottom: 1rem;
        font-weight: bold;
    }
    .first_con{
        text-align: left;
       /* margin-top: 10px;*/
    }
    .second_con{
        text-indent: 2rem;
    }
    .con_item{
        margin-top: 20px;
    }
</style>
