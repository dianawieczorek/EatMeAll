package pl.programistyczne.wieczorki.restful;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.junit.Test;

import com.google.common.collect.MapDifference;

import pl.programistyczne.wieczorki.resthelper.RestUrlList;

public class CustomerComanyRestfulTest extends AbstractRestfullTest {

	@Test
	public void shouldRetrunTwoComany() throws ClientProtocolException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.CUSTOMER_COMPANY, 200,
				"customer_company/all.json");
	}

	@Test
	public void shouldReturnCompanyWithIdOne() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.CUSTOMER_COMPANY + "1", 200,
				"customer_company/1.json");
	}
}
