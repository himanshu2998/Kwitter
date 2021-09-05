export const REQUEST_TYPE_GET = 'REQUEST_TYPE_GET';
export const REQUEST_TYPE_POST = 'REQUEST_TYPE_POST'
export const REQUEST_TYPE_PUT = 'REQUEST_TYPE_PUT';
export const REQUEST_TYPE_DELETE = 'REQUEST_TYPE_DELETE';
export const REQUEST_TYPE_POST_BLOB = 'REQUEST_TYPE_POST_BLOB';
export const REQUEST_TYPE_PUT_BLOB = 'REQUEST_TYPE_PUT_BLOB';
export const REQUEST_TYPE_GET_BLOB = 'REQUEST_TYPE_GET_BLOB';
export const REQUEST_TYPE_PATCH = 'REQUEST_TYPE_PATCH';


export const USER_API_URLS = {
    registerUser: `/register/`,
    loginUser: `/token/`,
    getProfile: `/user_account/get_profile/`,
    updateProfile: `/user_account/update_profile/`,
}


// export const USER_API_URLS = {
//     registerUser: `/apis/register/`,
// }

// export const CASE_ALLOCATION_API_URLS = {
//     caseAllocationList: `/lms/collection_dash/assign_dpd_case_list/`,
//     searchList:`/lms/collection_dash/assign_dpd_case_list/`,
//     getManagerList:`/lms/collection_dash/reporting_user_list/`,
//     assignCase:`/lms/collection_dash/assign_to_user/`,
//     getFilteredList:`/lms/collection_dash/assign_dpd_case_list/`,
//     getFilterApi:`/lms/collection_dash/filters/?filters=case_type,location,dpd_bucket,team_type,inactivity_days,code,lender_list`,
//     getTeam:`/lms/collection_dash/team_list/`,
//     getTeamMember:`/lms/collection_dash/team_member_list/`,
//     bulkCaseAllocation: '/lms/assign_case_to_user_bulk_upload/',
//     bulkPaymentGeneration:'/lms/payment_link/bulk_generation/',
//     bulkPaymentAccess:'/lms/payment_link/payment_link_access/'
// }

// export const LOGIN_API_URLS = {
//   loginType:`/sourcing/v3/authentication/login_type/`,
//   getOTP:`/sourcing/v3/authentication/generate_otp/`,
//   login:`/sourcing/v3/authentication/login/`
// }

// export const COLLECTION_PAYMENT_API_URLS = {
//   searchList:`/lms/collection_dash/collection_payment_list/`,
//   getDpdData: '/operation_manager_loan_request_data_retrieval/',
//   getCoBorrowers:'/co_applicant_listing/',
// getFeedbackHistory:'/lms/collection_dash/feedback_list',
// getOverdue:'/retrieve_term_loan_instalments_list_eligible_cash_cheque_collection/',
// getSourceDetail:'/lms/collection_dash/get_sourcing_details/',
// getFilterData:`/lms/collection_dash/filters/`,
// assignBackToMgr:`/lms/collection_dash/assign_back_to_manager/`,
// getActionCode:`/lms/collection_dash/action_codes`,
// getFiltersAgencyData:`/lms/collection_dash/filter_choices_temp/`,
// getBankList:`/customerapis/v1/master_bank_names/`,
// createFeedback:`/lms/collection_dash/register_feedback/`,
// getBankDetailsData:`/update_repayment_details/`,
// assignPermDefault: `/lms/collection_dash/update_dpd_case/`,
// callApplication:`/initiate_call/`,
// uploadFile:`/upload_file/`,
// getFeedbackActionRights: `/lms/collection_dash/action_privileges/`,
// downloadLegalNotice:'/lms/download_demand_legal_notice_document/',
// download:'/media/',
// getDownloadData:`/lms/get_documents_list/`,
// validatePaymntID:`/lms/validate-order-id/` ,
// }

// export const DPD_ACCOUNTS_API_URLS = {
//   emailFeedbackReport:`/lms/email_feedback_report/`,
//   downloadFeedbackReport:`/lms/download_feedback_report/`,  
//     searchList:`/lms/collection_dash/dpd_account_list/`,
//     getDpdData: '/operation_manager_loan_request_data_retrieval/',
//     getCoBorrowers:'/co_applicant_listing/',
//     getFeedbackHistory:'/lms/collection_dash/feedback_list',
//     getOverdue:'/retrieve_term_loan_instalments_list_eligible_cash_cheque_collection/',
//     getDpdTrack:'/lms/collection_dash/delinquency_strings/',
//     getForeclosure:'/lms/get_foreclosure_details/',
//     getSourceDetail:'/lms/collection_dash/get_sourcing_details/',
//     getFilterData:`/lms/collection_dash/filters/`,
//     assignBackToMgr:`/lms/collection_dash/assign_back_to_manager/`,
//     getActionCode:`/lms/collection_dash/action_codes`,
//     getFeedbackTeams:`/lms/collection_dash/feedback_team`,
//     getFiltersAgencyData:`/lms/collection_dash/filter_choices_temp/`,
//     getBankList:`/customerapis/v1/master_bank_names/`,
//     createFeedback:`/lms/collection_dash/register_feedback/`,
//   getBankDetailsData:`/update_repayment_details/`,
//   assignPermDefault: `/lms/collection_dash/update_dpd_case/`,
//   callApplication:`/initiate_call/`,
//   uploadFile:`/upload_file/`,
//   getFeedbackActionRights: `/lms/collection_dash/action_privileges/`,
//   downloadLegalNotice:'/lms/download_demand_legal_notice_document/',
//   download:'/media/',
//   getDownloadData:`/lms/get_documents_list/`,
//   downloadCPD:'/merge_images_to_pdf/',
//   downloadPD:'/download_verification_report/',
//   downloadLetters:'/download_letters/',
//   getCreditDocList:'/get_verification_documents/',
//   getOverviewCount:'/lms/collection_dash/collection_dpd_call_details/',
//   getOverviewEmis:'/lms/collection_dash/customer_emi_overview/',
//   getAssetVisits:'/get_visits/past_visits/',
//   getNotifications:'/lms/notify_center/notifications/',
//   getUnreadNotificationCount: '/lms/notify_center/unseen_notification_count/',
//   markViewed: '/lms/notify_center/notification/',
//   getOverdueDetails:'/lms/get_overdue_details/',
//   setPaymentLink:'/lms/payment_link/',
//   generateVendor:'/generate_payment_link/',
//   historyVendor:'/history/',
//   accessLink:'/lms/payment_link/payment_link_access/?loan_id=',
//   communicationLink:'/lms/payment_link/',
//   vendorPayment:'/send_payment_link/vendor/',
//   nonStarterDetail: '/lms/non_starter_details/'
//   }

//   export const COLLECTION_SUMMARY_API_URLS = {
//     getNpaMonitoringData: '/lms/collection_dash/npa_monitoring_report/',
//     getFilters: '/lms/collection_dash/filters/?filters=',
//     getCollectionCodeData: '/lms/collection_dash/summary/collection_code',
//     getTeamMembers: '/lms/collection_dash/reporting_user_list/',
//     getTeamPerformanceData: '/lms/collection_dash/summary/team_performance',
//     getCollectionPerformanceData: '/lms/collection_dash/summary/allocation_resolution',
//     getCollectionModeData: '/lms/collection_dash/summary/payment_mode',
//     getPortfolioMonitoringData:'/lms/collection_dash/summary/portfolio-monitoring/',
//     getPortfolioDrillData:'/lms/collection_dash/summary/portfolio-drill-down/'
//   //   searchList:`/lms/collection_dash/dpd_account_list/`,
//   //   getDpdData: '/operation_manager_loan_request_data_retrieval/',
//   //   getCoBorrowers:'/co_applicant_listing/',
//   //   getFeedbackHistory:'/lms/collection_dash/feedback_list',
//   //   getOverdue:'/retrieve_term_loan_instalments_list_eligible_cash_cheque_collection/',
//   //   getSourceDetail:'/lms/collection_dash/get_sourcing_details/',
//   //   getFilterData:`/lms/collection_dash/filters/`,
//   //   assignBackToMgr:`/lms/collection_dash/assign_back_to_manager/`,
//   //   getActionCode:`/lms/collection_dash/action_codes`,
//   //   getFiltersAgencyData:`/lms/collection_dash/filter_choices_temp/`,
//   //   getBankList:`/customerapis/v1/master_bank_names/`,
//   //   createFeedback:`/lms/collection_dash/register_feedback/`,
//   // getBankDetailsData:`/update_repayment_details/`,
//   // assignPermDefault: `/lms/collection_dash/update_dpd_case/`,
//   // callApplication:`/initiate_call/`,
//   // uploadFile:`/upload_file/`,
//   // getFeedbackActionRights: `/lms/collection_dash/action_privileges/`,
//   // downloadLegalNotice:'/lms/download_demand_legal_notice_document/',
//   // download:'/media/',
//   // getDownloadData:`/lms/get_documents_list/`,
//   // downloadCPD:'/merge_images_to_pdf/',
//   // downloadPD:'/download_verification_report/',
//   // downloadSOA:'/download_letters/',
//   // getCreditDocList:'/get_verification_documents/',
//   }


//   export const SETTLEMENT_REQUEST_URLS = {
//       searchList:'/lms/settlements/',
//       settlement:'/lms/settlement_details',
//       // settlementBreakup: '/lms/settlement_details',
//       getFilterData:'/lms/collection_dash/filters/',
//       settlementCollection: '/lms/collections/',
//       uploadFile:`/upload_file/`,
//       downloadSettlementLetter:'/lms/settlement_letters/',
//       uploadSignedSettlementLetter: '/lms/signed_settlement_letter/',
//       download:'/media/',
//       fetchReport: '/lms/get_filters/',
//       generateReport: '/lms/generate_report/',
//       getReportList: '/lms/finance_report/'
//     }
//   export const LOAN_RESTRUCTURING_API_URLS = {
//     baseUrl: "/lms/restructuring_letter",
//     getList: `/lms/loan_restructuring`,
//     getItem: `/lms/loan_restructuring/{}`,
//     dropdownValues: `/lms/loan_restructuring/get_dropdown_values`,
//     getFilters: `/lms/loan_restructuring/filters`,
//     getCalcDetails: `/lms/loan_restructuring/{}/get_calc_details`,
//     getRestructuringDetails: `/lms/loan_restructuring/{}/get_restructuring_details`,
//     getPaymentDetails: `/lms/loan_restructuring/{}/get_payment_details`,
//     uploadFile: `/upload_file/`,
//     initiateRequest: `/lms/loan_restructuring/{}/initiate_request/`,
//     approveRejectRequest: `/lms/loan_restructuring/{}/change_status/`,
//     updatePaymentAndDocument: `/lms/loan_restructuring/{}/update_payment_and_document/`,
//     getRepaymentSchedule: `/lms/loan_restructuring/{}/get_emi_schedule`,
//     downloadDocument: `/media/`,
//     createLetter: `/lms/restructuring_letter/create_letter/`,
//     getRestructuringLetters: `/lms/restructuring_letter/get_letters/{}/`,
//     downloadLetter: `/lms/restructuring_letter/download/{}`,
//     sendLetter: `/lms/restructuring_letter/send/{}`,
//     getLetterDetails: `/lms/restructuring_letter/get_details/{}/`,
//     generateOTP: `/lms/restructuring_letter/generate_otp/{}/`,
//     sendOTP: `/lms/restructuring_letter/sign/`,
//     //getOTP:`/sourcing/v3/authentication/generate_otp/`,
//     //login:`/sourcing/v3/authentication/login/`
//   }
//   export const LEGAL_NOTICE_URLS = {
//     baseUrl: `/lms/digital_notice`,
//     getBounceMeta: `/lms/digital_notice/bounce_metadata`,
//     syncRecords: `/lms/digital_notice/sync_requests/`,
//     getNoticeMetaData: `/lms/digital_notice/get_metadata`
//   } 


//   export const COLLECTION_USERS_API_URLS={
//     listCollectionUsers:`/lms/collection_dash/collection-users`,
//     getTeam : `/lms/collection_dash/team_list`,
//     changeTeam : `/lms/collection_dash/assign-teams/change_team/`,
//     unAssignAllTeams : `/lms/collection_dash/assign-teams/unassign_all_teams/`,
//     // listAdminUsers : `/lms/collection_dash/assign-teams/get_admin_users`,
//     removeTeam : `/lms/collection_dash/assign-teams/remove_team/`



//   }
