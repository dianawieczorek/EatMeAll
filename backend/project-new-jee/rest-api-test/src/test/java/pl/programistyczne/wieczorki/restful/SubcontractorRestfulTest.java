package pl.programistyczne.wieczorki.restful;

import java.io.FileNotFoundException;
import java.io.IOException;

import org.apache.http.client.ClientProtocolException;
import org.junit.Test;

import com.google.common.collect.MapDifference;

import pl.programistyczne.wieczorki.resthelper.RestUrlList;

public class SubcontractorRestfulTest extends AbstractRestfullTest {
	@Test
	public void shouldReturnAllSubcontrators() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.SUBCONTRACTOR, 200,
				"subcontractor/all.json");
	}

	@Test
	public void shouldReturnSubcontractorWithId1() throws ClientProtocolException, FileNotFoundException, IOException {
		MapDifference<String, Object> diff = preapreRestRequest(RestUrlList.SUBCONTRACTOR + "1", 200,
				"subcontractor/1.json");
	}

}
