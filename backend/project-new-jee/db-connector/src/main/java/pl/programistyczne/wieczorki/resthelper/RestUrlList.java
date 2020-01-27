package pl.programistyczne.wieczorki.resthelper;

public class RestUrlList {
	public final static String IP = "192.168.99.100";
	public final static String PORT = "8080";
	public final static String PROJECT_NAME = "rest-api";
	public final static String URL = "http://" + IP + ":" + PORT + "/" + PROJECT_NAME + "/";

	public final static String CUSTOMER_COMPANY = RestUrlList.URL + "customer-company/";
	public final static String CUSTOMER_EMPLOYEE = RestUrlList.URL + "customer-employee/";
	public final static String PROJECT = RestUrlList.URL + "project/";
	public final static String AGREEMENTS = RestUrlList.URL + "agreement";
	public final static String SUBCONTRACTOR = RestUrlList.URL + "subcontractor/";
	public final static String RENTIAL = RestUrlList.URL + "rental/";
	public final static String TOOLS = RestUrlList.URL + "tool/";
}
