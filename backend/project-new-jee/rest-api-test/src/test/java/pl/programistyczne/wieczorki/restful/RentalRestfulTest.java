package pl.programistyczne.wieczorki.restful;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.junit.Test;

import com.google.common.collect.MapDifference;

import pl.programistyczne.wieczorki.resthelper.RestUrlList;

public class RentalRestfulTest extends AbstractRestfullTest {
	@Test
	public void shouldReturnAllRential() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.RENTIAL, 200, "rental/all.json");
	}

	@Test
	public void shouldReturnRentialWithId1() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.RENTIAL + "1", 200,
				"rental/1.json");
	}

}
