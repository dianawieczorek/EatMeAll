package pl.programistyczne.wieczorki.restful;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.junit.Ignore;
import org.junit.Test;

import com.google.common.collect.MapDifference;

import pl.programistyczne.wieczorki.resthelper.RestUrlList;

@Ignore
public class AgreementRestfulTest extends AbstractRestfullTest {
	@Test
	public void shouldReturnAllProjects() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.AGREEMENTS, 200,
				"agreement/all.json");
	}

	@Test
	public void shouldReturnProjectWithId1() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.AGREEMENTS + "1", 200,
				"agreement/1.json");
	}

}
