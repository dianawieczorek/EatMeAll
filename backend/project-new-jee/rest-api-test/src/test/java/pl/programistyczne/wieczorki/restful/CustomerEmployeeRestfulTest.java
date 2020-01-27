package pl.programistyczne.wieczorki.restful;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.junit.Test;

import com.google.common.collect.MapDifference;

import pl.programistyczne.wieczorki.resthelper.RestUrlList;

public class CustomerEmployeeRestfulTest extends AbstractRestfullTest {

	@Test
	public void shouldReturnAllEmployees() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.CUSTOMER_EMPLOYEE, 200,
				"customer_employee/all.json");
	}

	@Test
	public void shouldReturnEmployeeWithId1() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.CUSTOMER_EMPLOYEE + "1", 200,
				"customer_employee/1.json");
	}

}
